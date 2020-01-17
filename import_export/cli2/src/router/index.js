import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import about from '@/components/about'

/*安装插件*/
Vue.use(Router)

export default new Router({

  /*配置路由和组件之间的映射关系*/
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: about
    }
  ]
})
