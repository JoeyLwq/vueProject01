import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('@/components/HelloWorld');
const Home = () => import('@/components/Home');
const about = () => import('@/components/about');
const User = () => import('@/components/User');
const News = () => import('@/components/HomeChildren/News');
const Message = () => import('@/components/HomeChildren/Message');
const QueryTest = () => import('@/components/QueryTest');
const TestPromise = () => import('@/components/TestPromise');
const TestVuex = () => import('@/components/TestVuex/TestVuex');
const TestAxios = () => import('@/components/testAxios');

/*安装插件*/
Vue.use(Router);

const router = new Router({

  /*配置路由和组件之间的映射关系*/
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'HelloWorld'
      }
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message
        }
      ]
    },
    {
      path: '/about',
      component: about,
      meta: {
        title: '关于'
      }
    },
    /*重定向*/
    {
      path: '/tryredirect',
      redirect: '/',
      meta: {
        title: '测试重定向'
      }
    },
    /*动态路由*/
    {
      path: '/user/:userName',
      component: User,
      meta: {
        title: '测试动态路由'
      }
    },
    /*通过query向目标路由传递参数*/
    {
      path: '/querytest',
      component: QueryTest,
      meta:{
        title: '测试query'
      }
    },
    {
      path: '/testPromise',
      component: TestPromise,
      meta: {
        title: '测试Promise'
      }
    },
    {
      path: '/testVuex',
      component: TestVuex,
      meta: {
        title: '测试vuex'
      }
    },
    {
      path: '/testAxios',
      component: TestAxios,
      meta: {
        title: '测试axios'
      }
    }
  ],

  /*默认使用hash的方法进行路由，但路径中会带#，使用history模式则不会*/
  mode: 'history'

});

router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title;
  next()
});


export default router
