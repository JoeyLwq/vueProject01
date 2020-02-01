import {CHANGEDIST, DECREMENT, INCREMENT} from "./mutation-types";
import Vue from 'vue';

export default {
  [INCREMENT](state){
    state.counter++
  },
  [DECREMENT](state){
    state.counter--
  },
  [CHANGEDIST](state){
    /*这里的操作竟然都是响应式的*/
    state.dist.one = 'one被改变了';
    Vue.set(state.dist,'two','this is two');
    state.dist['three'] = 'this is three';
    delete state.dist.one
  }
}
