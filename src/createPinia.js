import { createPinia, PiniaVuePlugin, defineStore } from "pinia";
import Vue, { reactive, ref, set } from "vue";

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

function fetchUserInfo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({name: 'cc', id: 123})
        }, 1000)
    })
}

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    function setCount(value) {
        count.value = value
    }
    return {count, setCount}
})

// 自己实现个pinia

export function useMyCounterStore() {
    return runWithCache('test', () => {
        const count = ref(0)
        function setCount(value) {
            count.value = value
        }
        return {count, setCount}
    })    
}

const cache = {}
function runWithCache(name, fn) {
    if (cache[name]) {
        return cache[name]
    }
    const res = fn()
    // 这样不需要再.value
    const resRective = reactive({})
    Object.keys(res).forEach(key => {
        // 将res中的属性copy到resRective
        // 需要使用set,保证响应式
        set(resRective, key, res[key])
    })
    cache[name] = resRective
    return resRective
}