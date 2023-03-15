const createApp = require('./createApp')

// 避免单例：
// - 返回一个创建vue实例的工厂函数：单个vue实例，在被多个用户请求重复使用，造成共享很糟糕，比如登录状态
// - router
// - vuex
// 避免副作用
function createServerApp(context) {

    const {app, router, store} = createApp()

    // 因为路由导致异步，加个promise
    return new Promise((resolve, reject) => {
        // 在服务端设置router，注意这里需要保障server路由和router一致
        router.push(context.url)
        // 等到 router 将可能的异步组件和钩子函数解析完
        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents()
            if (!matchedComponents.length) {
                return reject({ code: 404 })
            }
            // 页面需要的数据 -> ssr需要
            Promise.all(matchedComponents.map(cpn => {
                if (!cpn.asynData) {
                    return
                }
                return cpn.asynData({store, route: router.currentRoute})
            })).then(() => {
                // 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML 中。
                context.state = store.state
                // 完成app创建
                resolve(app)
            })
        }, reject)
    })

}

module.exports = createServerApp