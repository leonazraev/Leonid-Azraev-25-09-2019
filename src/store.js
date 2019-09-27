import Vue from 'vue'
import Vuex from 'vuex'
import home from './Modeules/home.js'
import favorites from './Modeules/favorites.js'
import customStyle from './Modeules/customStyle.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

   
  },
  modules: {
    home,
    favorites,
    customStyle
  }
})
