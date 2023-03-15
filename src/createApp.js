import {createApp} from 'vue'
import App from './App.vue'
import createRouter from './createRouter'
import createStore from "./createStore";

export default function () {
  // 创建 router 实例
  const router = createRouter()
  const store = createStore()

  console.log(55, router);

  const app = createApp(App)

  app.use(router)
  app.use(store)

  // 返回 app 和 router
  return { app, router }
}