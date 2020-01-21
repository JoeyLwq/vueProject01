import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 10
  },
  mutations: {
    incre(state){
      state.counter++
    },
    decre(state){
      state.counter--
    }
  },
  actions: {

  },
  getters: {
    getter01(state, getters){
      return state.counter + '经过了geter01'
    },
    getter02(state, getters){
      return function(sth) {
        return sth + ' 经过了getter02'
      }
    }
  },
  modules: {

  }
})

export default store
