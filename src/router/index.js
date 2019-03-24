import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import headerVue from '@/components/comment/Header'
import footerVue from '@/components/comment/Footer'
import categoryVue from '@/components/category'
import cartVue from '@/components/cart'
import userVue from '@/components/user'
import navVue from '@/components/comment/Nav'
import loginVue from '@/components/login'
import searchVue from '@/components/search'
import productVue from '@/components/product'
import searchListVue from '@/components/searchList'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Axios from 'axios'

Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = 'http://localhost:3000'
Vue.use(Mint)

Vue.component('headerVue', headerVue)
Vue.component('footerVue', footerVue)
Vue.component('navVue', navVue)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/category',
      name: 'category',
      component: categoryVue
    },
    {
      path: '/cart',
      name: 'cart',
      component: cartVue
    },
    {
      path: '/user',
      name: 'user',
      component: userVue
    },
    {
      path: '/login',
      name: 'login',
      component: loginVue
    },
    {
      path: '/search',
      name: 'search',
      component: searchVue
    },
    {
      path: '/searchList',
      name: 'searchList',
      component: searchListVue
    },
    {
      path: '/product',
      name: 'product',
      component: productVue
    }
  ]
})
