<template>
  <div>
    <h2>=====这里是用于测试Vuex的页面1======</h2>
    <h3>{{$store.state.counter}}</h3>
    <div>这里用于测试vuex的getters1 {{$store.getters.getter01}}</div>
    <div>这里用于测试vuex的getters2 {{$store.getters.getter02('传入的变量')}}</div>
    <div>这里用于测试vuex的响应式 {{$store.state.dist}}</div>
    <button @click="add">+</button>
    <button @click="minus">-</button>
    <button @click="changeDist">改变dist</button>
    <button @click="syncChange">异步操作</button>
    <test-vuex2/>

    <h2>=====这里是用于测试store的mudule======</h2>
    <!--获取mudule中state的内容-->
    <h3>{{$store.state.a.name}}</h3>
    <h3>{{$store.getters.getter1FromMuduleA}}</h3>
    <button @click="muduleClick">模块按钮一</button>
    <button @click="syncFromMudule">模块同步按钮</button>
  </div>
</template>

<script>
import TestVuex2 from './TestVuex2'
import {INCREMENT,DECREMENT,CHANGEDIST} from "../../store/mutation-types";
import {SYNCCHANGE} from "../../store/action-types";

export default {
  name: 'TestVuex',
  components: {TestVuex2},
  methods: {
    add(){
      this.$store.commit(INCREMENT)
    },
    minus(){
      this.$store.commit(DECREMENT)
    },
    changeDist(){
      this.$store.commit(CHANGEDIST)
    },
    syncChange(){
      /*dispatch是调用store.actions中的方法
      *  在actions中返回的Promise可在此调用then*/
      this.$store.dispatch(SYNCCHANGE, '外面传入的参数')
        .then(msg => {
          console.log(msg + '在外部显示了');
        })
    },

    muduleClick(){
      this.$store.commit('mutationsFromMuduleA')
    },
    syncFromMudule(){
      this.$store.dispatch('syncFromMuduleA')
        .then(msg=>{
          console.log(msg);
        })
    }

  }
}
</script>
