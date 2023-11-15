import createApp from "./createApp";


const {app, pinia, router} = createApp()

// 获取ssr注入的状态，作为store的初始状态
if (window.__INITIAL_STATE__) {
    console.log('[CSR] set initial state', window.__INITIAL_STATE__)
    pinia.state.value = window.__INITIAL_STATE__
}

router.beforeResolve(async (to, from, next) => {
    // 预取数据
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)
    
    // 一般情况getMatchedComponents获取的单个组件
    // 当存在嵌套路由时，匹配到多个组件
    // 多个组件是与之前重复的不再预取数据
    let diffed = false
    const activated = matched.filter((c, i) => {
        return diffed || (diffed = (prevMatched[i] !== c))
    })

    if (!activated.length) {
        return next()
    }

    // 预取数据
    await Promise.all(activated.map(c => {
        console.log('[CSR] asyncData', c)
        return c.asyncData && c.asyncData({pinia, route: to})
    }))

    next()
})
// 提前解析路由配置中的异步组件，才能正确地调用组件中可能存在的路由钩子
router.onReady(() => {
    console.log('[CSR] router onReady')

    console.log('[CSR] mount app')
    app.$mount('#app')
})