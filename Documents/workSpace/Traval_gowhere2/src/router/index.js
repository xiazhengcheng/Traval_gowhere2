import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/components/home/login'
import home from '@/components/home/home'
import city from '@/components/city/city'
// import child1 from '@/components/bus/child1'
// import child2 from '@/components/bus/child2'
// import father from '@/components/bus/father'
import detail from '@/components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    // {
    //   path: '/child1',
    //   name: 'Child1',
    //   component: child1
    // },
    // {
    //   path: '/child2',
    //   name: 'Child2',
    //   component: child2
    // },
    // {
    //   path: '/father',
    //   name: 'Father',
    //   component: father
    // },
    {
      path:'/detail',
      name:'detail',
      component: detail
    }


  ]
})
