<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="item">
      <router-link to="/" tag="button">HelloWorld</router-link>
      <router-link to="/home" tag="button">首页</router-link>
      <router-link to="/about" tag="button">关于</router-link>
      <router-link to="/tryredirect" tag="button">测试重定向</router-link>
      <router-link to="/user/lisi" tag="button">测试动态绑定</router-link>
      <router-link to="/testPromise" tag="button">测试Promise</router-link>
      <router-link :to="{path: '/querytest', query: {name: 'Lin',age: 18}}" tag="button">测试query</router-link>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "./assets/css/base.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
