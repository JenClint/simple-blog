import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
import './styles/main.scss'
import { getAppInfo, isDev } from './utils'

// 创建Vue应用实例
const app = createApp(App)

// 获取应用信息
const appInfo = getAppInfo()

// 在开发模式下输出应用信息
if (isDev()) {
  console.log('应用信息:', appInfo)
  console.log('当前环境:', import.meta.env.MODE)
}

// 设置页面标题
document.title = appInfo.title

// 注册Pinia状态管理
app.use(createPinia())

// 注册路由
app.use(router)

// 注册Element Plus
app.use(ElementPlus)

// 挂载应用
app.mount('#app')