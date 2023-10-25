<template>
    <div>
        HOME<span>~</span>BIG
        <p>{{ user.name }}</p>
        <p>{{ count  }}</p>
        <button @click="onAddClick">+</button>
        <button @click="onSubClick">-</button>
    </div>
</template>
<script setup>
import { computed, getCurrentInstance, onMounted } from "vue";

const props = defineProps({
    msg: String
})

const vm = getCurrentInstance()
const store = vm.proxy.$store
const user = computed(() => store.state.user)
const count = computed(() => store.state.count)

function onAddClick() {
    store.commit('setCount', count.value + 1)
}

function onSubClick() {
    store.commit('setCount', count.value  -1)
}   

</script>
<script>
export default {
    // 自定义，代替serverPrefetch 更灵活些
    asyncData({store, route}) {
        // 触发 action 后，会返回 Promise
        return store.dispatch('fetchUser')
    },
    // vue ssr内部调用
    // serverPrefetch(vm) {
    //     console.log('serverPrefetch', vm.$store, vm.$route)
    //     return vm.$store.dispatch('fetchUser')
    // }
}
</script>