<template>
    <div>
        HOME
        <p>{{ user.name }}</p>
    </div>
</template>
<script setup>
import { computed, getCurrentInstance } from "vue";

const props = defineProps({
    msg: String
})

const vm = getCurrentInstance()
const store = vm.proxy.$store
const user = computed(() => store.state.user)


</script>
<script>
export default {
    asyncData({store, route}) {
        console.log('asyncData')
        // 触发 action 后，会返回 Promise
        return store.dispatch('fetchUser')
    } 
}
</script>