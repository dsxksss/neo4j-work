import './style.css'
import { createApp } from './main'
import naive from 'naive-ui'

const { app } = createApp()

app.use(naive);
app.mount('#app')
