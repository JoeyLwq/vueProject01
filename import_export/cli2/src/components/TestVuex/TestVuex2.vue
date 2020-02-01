<template>
  <div>
    <h2>=====这里是用于测试Vuex的页面2=====</h2>
    <h3>{{$store.state.counter}}</h3>
    <h3>{{$store.state.dist}}</h3>
  </div>
</template>

<script>
export default {
  name: 'TestVuex2'
}
</script>
