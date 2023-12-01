import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'
import url from 'node:url'
import path from 'node:path'
import fs from 'node:fs'

export async function render() {
  const { app } = createApp()

  // passing SSR context object which will be available via useSSRContext()
  // @vitejs/plugin-vue injects code into a component's setup() that registers
  // itself on ctx.modules. After the render, ctx.modules would contain all the
  // components that have been instantiated during this render call.
  let ctx = {}

  let workPath;
  let fileList;

  workPath = path.dirname(url.fileURLToPath(import.meta.url));
  fileList = fs.readdirSync(workPath);
  ctx['workPath'] = workPath;
  ctx['fileList'] = fileList;

  const html = await renderToString(app, ctx)


  return { html }
}
