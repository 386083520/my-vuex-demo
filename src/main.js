import Vue from 'vue'
import App from "./App";
import Vuex from 'vuex'
/*import MyVuex from 'my-vuex'*/
Vue.use(Vuex)

const moduleA = {
    namespaced: true,
    state: () => ({
        count: 100,
        countA: 101
    }),
    mutations: {
        increment (state) {
            // 这里的 `state` 对象是模块的局部状态
            console.log('gsd2')
            state.count++
        }
    },
    actions: {
        incrementIfOddOnRootSum ({ state, commit, rootState }) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment')
            }
        },
        /*incrementAsync ({ commit }) {
            setTimeout(() => {
                console.log('gsdaction2')
                commit('increment')
            }, 1000)
        }*/
    },
    getters: {
        getCount (state, getters, rootState) {
            return state.count * 2
        },
        sumWithRootCount (state, getters, rootState) {
            return state.count + rootState.count
        }
    },
    modules: {
        b: {
            state: {
                count: 1000
            },
            getters: {
                getCount3: (state, getters, rootState, rootGetters) => {
                    console.log('gsdgetCount3', state, getters, rootState, rootGetters)
                    return rootState.a.count * 2
                }
            },
            mutations: {
                increment (state) {
                    console.log('gsd3')
                    state.count++
                }
            },
            actions: {
                incrementAsync ({ dispatch, commit, getters, rootGetters }) {
                    setTimeout(() => {
                        console.log('gsdaction3')
                        commit('increment', null, { root: true })
                    }, 1000)
                }
            }
        }
    }
}

const store = new Vuex.Store({
    state: {
        count: 0,
        gadVal: 1
    },
    getters: {
        getCount: state => {
            console.log('gsdgetCount')
            return state.count * 2
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    actions: {
        incrementAsync ({ commit }) {
            setTimeout(() => {
                console.log('gsd1')
                commit('increment')
            }, 1000)
        }
    },
    modules: {
        a: moduleA
    }
})

let app = new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
console.log('gsdapp', app.$store)
