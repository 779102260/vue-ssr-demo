<template>
    <div>
        <router-link to="/">Go to Home</router-link> | 
        <router-link to="/about">Go to About</router-link>
        <div @click="test">333</div>
        <router-view></router-view>
    </div>
</template>
<script setup>

function test() {}

function ssrFetchData() {}

</script>
<style>
div {}
</style>