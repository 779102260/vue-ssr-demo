<template><div>HOME</div></template>
<script setup>
import { defineOptions, defineProps } from "vue";

const props = defineProps({
    msg: String
})
console.log(1111, props.msg)


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