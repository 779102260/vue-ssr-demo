import Vue from 'vue'
import App from './App.vue'
import createRouter from './createRouter'
import createPinia from "./createPinia";

export default function () {
  
  // 创建 router 实例
  const router = createRouter()
  const pinia = createPinia()

  const app = new Vue({
    router,
    // store,
    pinia,
    render: h => h(App)
  })

  // 返回 app 和 router
  return { app, router, pinia }
}




