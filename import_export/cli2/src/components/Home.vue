<template>
  <div>
    {{headinfo}}
    <div>
      <router-link to="/home/news" tag="button">新闻</router-link>
      <router-link to="/home/message" tag="button">信息</router-link>
      <router-view/>
    </div>
  </div>

</template>

<script>

export default {
  props:{
  },
  data(){
    return {
      headinfo: '头部信息',
      path: '/home/news'
    }
  },
  activated() {
    this.$router.push(this.path)
  },
  beforeRouteLeave(to,from,next) {
    this.path = this.$route.path;
    next()
  }
}
</script>
