import createApp from "./createApp";


const {app} = createApp()

// 获取ssr注入的状态，作为store的初始状态
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

// 提前解析路由配置中的异步组件，才能正确地调用组件中可能存在的路由钩子
router.onReady(() => {
    router.beforeResolve(async (to, from, next) => {
        // 预取数据
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)

        // TODO
        // 我们只关心非预渲染的组件
        // 所以我们对比它们，找出两个匹配列表的差异组件
        let diffed = false
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c))
        })
        if (!activated.length) {
            return next()
        }

        // 预取数据
        await Promise.all(activated.map(c => {
            console.log(22222, c)
            return c.asyncData && c.asyncData({store, route: to})
        }))

        next()
    })
    app.$mount('#app')
})