import Vue from 'vue'
import App from './App.vue'
import createRouter from './createRouter'
import createStore from "./createStore";

import { sync } from 'vuex-router-sync'

export default function () {
  
  // 创建 router 实例
  const router = createRouter()
  const store = createStore()

  // 同步路由状态：存储route state到store，csr时再次执行时还原
  sync(store, router)

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })


  // 返回 app 和 router
  return { app, router, store }
}