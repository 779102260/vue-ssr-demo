<template>
    <div>
        HOME<span>~</span>BIG
        <p>{{ userStore.user.name }}</p>
        <p>{{ countStore.count  }}</p>
        <p>test2: {{ myCounterStore.count }}</p>
        <button @click="onAddClick">+</button>
        <button @click="onSubClick">-</button>

    </div>
</template>
<script setup>
import { useUserStore, useCounterStore } from "../createPinia";

const props = defineProps({
    msg: String
})

const userStore = useUserStore()
const countStore = useCounterStore()

function onAddClick() {
    countStore.setCount(countStore.count + 1)
}

function onSubClick() {
    countStore.setCount(countStore.count - 1)
}   

</script>
<script>
import { useUserStore } from "../createPinia";
export default {
    // 自定义，代替serverPrefetch 更灵活些
    async asyncData({pinia, route}) {
        // 触发 action 后，会返回 Promise
        console.log('asyncData')
        const userStore = useUserStore(pinia)
        await userStore.setUser()
        return {}
    },
    // vue ssr内部调用
    // serverPrefetch(vm) {
    //     console.log('serverPrefetch', vm.$store, vm.$route)
    //     return vm.$store.dispatch('fetchUser')
    // }
}
</script>