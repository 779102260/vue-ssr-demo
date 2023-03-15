import Vuex from "vuex"

export default function createStore() {
    return new Vuex.Store({
        state: {
            count: 0,
            user: {}
        },
        mutations: {
            setCount(state, value) {
                state.count = value
            },
            setUser(state, value) {
                state.user = value
            }
        },
        actions: {
            fetchUser({commit}) {
                // 接口请求数据
                return fetchUserInfo().then(data => {
                    commit('setUser', data)
                })
            }
        }
    })
}

function fetchUserInfo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({name: 'cc', id: 123})
        }, 1000)
    })
}