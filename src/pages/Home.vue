<template>HOME</template>
<script>
export default {
    // 用于服务端获取数据
    asyncData({store, route}) {
        // 触发 action 后，会返回 Promise
        return store.dispatch('fetchUser')
    }
}
</script>