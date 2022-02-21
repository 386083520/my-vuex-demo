import Vue from 'vue'
import App from "./App";
import Vuex from 'vuex'
import MyVuex from 'my-vuex'
Vue.use(MyVuex)

const store = new MyVuex.Store({
    state: {
        count: 0
    },
    getters: {
        getCount: state => {
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
                commit('increment')
            }, 1000)
        }
    }
})

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
