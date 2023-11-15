<template>
    <div>
        <p>About us</p>
        <p>{{ countStore.count }}</p>
        <p>test1: {{ myCounterStore.count }}</p>
    </div>
</template>
<script setup>
import { useCounterStore, useMyCounterStore } from "../createPinia";
const countStore = useCounterStore()
const myCounterStore = useMyCounterStore()

</script>