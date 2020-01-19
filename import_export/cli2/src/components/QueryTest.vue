<template>
  <div>
    <h2>这里用于测试query传递参数</h2>
    <ul>
      <li>{{$route.query.name}}</li>
      <li>{{$route.query.age}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'QueryTest'
}
</script>
