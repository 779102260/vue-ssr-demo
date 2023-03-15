import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'


// TODO 代码分割支持的原理(router?)
const routes = [
  {path: '/', component: () => import('./pages/Home.vue')},
  {path: '/about', component: () => import('./pages/AboutUs.vue')},
]

// NOTE: vue-router可以运行在服务端
// 服务端避免单例
export default function () {

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

  router.beforeEach((to, from) => {
    // ...
    // 返回 false 以取消导航
    console.log(to)
  })


  return router

}