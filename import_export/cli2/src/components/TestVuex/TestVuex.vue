<template>
  <div>
    <h2>=====这里是用于测试Vuex的页面1======</h2>
    <h3>{{$store.state.counter}}</h3>
    <div>这里用于测试vuex的getters1 {{$store.getters.getter01}}</div>
    <div>这里用于测试vuex的getters2 {{$store.getters.getter02('传入的变量')}}</div>
    <button @click="add">+</button>
    <button @click="minus">-</button>

    <test-vuex2/>
  </div>
</template>

<script>
import TestVuex2 from './TestVuex2'

export default {
  name: 'TestVuex',
  components: {TestVuex2},
  methods: {
    add(){
      this.$store.commit('incre')
    },
    minus(){
      this.$store.commit('decre')
    }

  }
}
</script>
