<template>
  <div>
    <button @click="testGet">测试get</button>
    <button @click="testPost">测试post</button>
    <button @click="testAxiosAll">测试all</button>
  </div>
</template>

<script>
import {testGet,testPost,testAll} from "../network/api";

export default {
    name: "testAxios",
    methods: {
      testGet(){
        testGet()
          .then(res=>{
          console.log(res)
          })
      },
      testPost(){
        testPost()
          .then(res=>{
            console.log(res);
          })
      },
      testAxiosAll(){
        testAll()
          .then(res=>{
            console.log(res);
          })
      }
    }
  }
</script>

<style scoped>

</style>
