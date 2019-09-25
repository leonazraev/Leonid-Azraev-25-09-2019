import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Favorites from './components/Favorites.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/Favorites',
      name: 'favorites',
      component: Favorites
    },
  ]
})

/**
     {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    }
 **/
