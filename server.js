import fs from 'node:fs/promises'
import express from 'express'
import path, { join } from 'node:path'
import url from 'node:url'
import cors from 'cors'


// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/ssr-manifest.json', 'utf-8')
  : undefined

// Create http server
const app = express()

// Add Vite or respective production middlewares
let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client', { extensions: [] }))
}

app.use(cors());

// const checkImagesUpload = upload({
//   diskStorage: diskStorage.Img,
//   //文件大小设置
//   limits: {
//     files: 4, // 最多允许发送1个文件,
//     fileSize: 50 * 1024 * 1024, //50mb限制
//   },
//   //过滤文件设置
//   fileFilter: (__req, file, cb) => {
//     // 只允许发送图像文件
//     if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
//       return cb(
//         new multer.MulterError("LIMIT_UNEXPECTED_FILE", "只接收图片文件!!!"),
//         false,
//       );
//     }
//     cb(null, true);
//   },
// }).array("images");

app.get('/dirnames/', async (req, res) => {
  try {
    const imagesDir = join(path.dirname(url.fileURLToPath(import.meta.url)), 'public'); // 假设你的图片存储在public/images目录

    const files = await fs.readdir(imagesDir);
    const images = files
      .map(file => {
        if (file.split('.').length < 2) {
          return file;
        }
      })
      .filter(image => image !== undefined);

    res.send({ data: images, msg: "获取目录成功" });
  } catch (error) {
    res.status(400).send({ msg: `获取目录失败:${error}` });
  }
});

app.get('/dirnames/:dirname', async (req, res) => {
  try {
    const { dirname } = req.params;
    const imagesDir = join(path.dirname(url.fileURLToPath(import.meta.url)), 'public', dirname); // 假设你的图片存储在public/images目录

    const files = await fs.readdir(imagesDir);
    const images = files
      .map(file => ({
        name: file,
        url: `/${dirname}/${file}`
      }));

    res.send({ data: images, msg: "获取目录图片成功" });
  } catch (error) {
    res.status(400).send({ msg: `获取目录图片失败:${error}` });
  }
});


// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')

    let template
    let render
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.js')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    const rendered = await render(url, ssrManifest)

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
