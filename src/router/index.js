import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Account from '@/pages/Account'
import Submit from '@/pages/Submit'
import Favorites from '@/pages/Favorites'
import More from '@/pages/More'
import Login from '@/pages/Login'
import AboutUs from '@/pages/more/AboutUs'
import ChangePassword from '@/pages/more/ChangePassword'
import Directory from '@/pages/more/Directory'
import MapSearch from '@/pages/more/MapSearch'
import MortgageCalculator from '@/pages/more/MortgageCalculator'
import MortgageFinancing from '@/pages/more/MortgageFinancing'
import Suggestion from '@/pages/more/Suggestion'
import UpdateProfile from '@/pages/more/UpdateProfile'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Homepage', component: Home },
    { path: '/home', name: 'Home', component: Home },
    { path: '/account', name: 'Account', component: Account },
    { path: '/submit', name: 'Submit', component: Submit },
    { path: '/favorites', name: 'Favorites', component: Favorites },
    { path: '/more', name: 'More', component: More },
    { path: '/login', name: 'Login', component: Login },
    { path: '/about-us', name: 'About Us', component: AboutUs },
    { path: '/change-password', name: 'Change Password', component: ChangePassword },
    { path: '/directory', name: 'Directory', component: Directory },
    { path: '/map-search', name: 'Map Search', component: MapSearch },
    { path: '/mortgage-calculator', name: 'Mortgage Calculator', component: MortgageCalculator },
    { path: '/mortgage-financing', name: 'Mortgage Financing', component: MortgageFinancing },
    { path: '/suggestion', name: 'Suggestion', component: Suggestion },
    { path: '/update-profile', name: 'Update Profile', component: UpdateProfile }
  ]
})
