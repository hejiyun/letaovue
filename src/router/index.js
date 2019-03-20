import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import headerVue from '@/components/Header'
import footerVue from '@/components/Footer'

Vue.component('headerVue', headerVue)
Vue.component('footerVue', footerVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/1',
      name: 'Header',
      component: headerVue
    },
    {
      path: '/12',
      name: 'Footer',
      component: footerVue
    }
  ]
})
