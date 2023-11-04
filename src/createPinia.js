import { createPinia, PiniaVuePlugin, defineStore } from "pinia";
import Vue, { ref } from "vue";

Vue.use(PiniaVuePlugin)

export default function _createPinia() {
    return createPinia()
}

export const useUserStore = defineStore('user', () => {
    const user = ref({})

    async function setUser(value) {
        user.value = await fetchUserInfo()
    }

    return {user, setUser}
})

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    function setCount(value) {
        count.value = value
    }
    return {count, setCount}
})

function fetchUserInfo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({name: 'cc', id: 123})
        }, 1000)
    })
}