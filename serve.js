
const server = require('express')()
// const {createRenderer, createBundleRenderer} = require('vue-server-renderer')
const {createBundleRenderer} = require('@vue/server-renderer')

const template = require('fs').readFileSync('./template.html', 'utf-8')
// 创建一个 renderer，支持模板
// const renderer = createRenderer({
//     template
// })
const bundle = require('./dist/vue-ssr-server-bundle.json')
const manifest = require('./dist/vue-ssr-client-manifest.json')
const renderer = createBundleRenderer(bundle, {
    // TODO
    // for component caching
    // cache: LRU({
    //     max: 1000,
    //     maxAge: 1000 * 60 * 15
    // }),
    // this is only needed when vue-server-renderer is npm-linked
    // basedir: resolve('./dist'),
    // recommended for performance
    runInNewContext: false,
    template,
    manifest
})

const createApp = require('../src/serve.entry.js')

server.get('*', (req, res) => {
    // 第 1 步：创建一个 Vue 实例

    // 通用代码:
    // - 不使用响应式数据
    // - 生命周期：只有 beforeCreate和created （没有挂载、更新、卸载过程）
    //      - 注意避免副作用：比如在beforeCreate和created中使用定时器，在node中创建后无法在destroyed销毁
    // - 平台特性API无法使用：window、document等（可以在浏览器挂载后使用）
    // - 自定义指令：操作dom无法使用 https://vue2-ssr-docs.vercel.app/zh/guide/universal.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E4%BB%A4

    const context = {url: req.url}
    const app = createApp(context)
    
    // 第 2 步：将 Vue 实例渲染为 HTML
    // - 支持插值
    // - 在使用 *.vue 组件时，自动注入「关键的 CSS(critical CSS)」；
    // - 在使用 clientManifest 时，自动注入「资源链接(asset links)和资源预加载提示(resource hints)」；
    // - 在嵌入 Vuex 状态进行客户端融合(client-side hydration)时，自动注入以及 XSS 防御。

    
    renderer.renderToString(app, {
        title: 'hello page'
    }).then(html => {
        setRes(html)
    }).catch(err => {
        console.error(err)
    })

    // 返回
    function setRes(html) {
        res.end(html)
    }
})

server.listen(8080)