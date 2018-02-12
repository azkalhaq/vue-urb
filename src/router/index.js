import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Account from '@/components/Account'
import Add from '@/components/Add'
import Favorites from '@/components/Favorites'
import More from '@/components/More'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
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
      path: '/add',
      name: 'Add',
      component: Add
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
    }
  ]
})
