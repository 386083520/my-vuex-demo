import Vue from 'vue'
import App from "./App";
import Vuex from 'vuex'
import MyVuex from 'my-vuex'
Vue.use(MyVuex)

const store = new MyVuex.Store({
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
                commit('increment')
            }, 1000)
        }
    }
})

let app = new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
console.log('gsdapp', app.$store)
