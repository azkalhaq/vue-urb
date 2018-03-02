import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Account from '@/pages/Account'
import Submit from '@/pages/Submit'
import Favorites from '@/pages/Favorites'
import More from '@/pages/More'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/submit',
      name: 'Submit',
      component: Submit
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    },
    {
      path: '/more',
      name: 'More',
      component: More
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
