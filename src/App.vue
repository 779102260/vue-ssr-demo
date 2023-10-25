<template>
    <!-- 这里需要指定id="app" -->
    <div id="app">
        <router-link to="/">Go to Home</router-link> | 
        <router-link to="/about">Go to About</router-link>
        <router-view></router-view>
    </div>
</template>
<script setup>

function test() {}

function ssrFetchData() {}

</script>