import Vue from 'vue'
import Vuex from 'vuex'
import data from './resources/data.js'
import autocomplete from './resources/autocomplete.js'
import home from './Modeules/home.js'
import favorites from './Modeules/favorites.js'
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
    favorites
  }
})
