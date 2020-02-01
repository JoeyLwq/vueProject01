import Vue from 'vue'
import Vuex from 'vuex'
import {moduleA} from "./modules/moduleA";
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    counter: 10,
    dist: {
      'one':'this is one'
    }
  },
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
});

export default store
