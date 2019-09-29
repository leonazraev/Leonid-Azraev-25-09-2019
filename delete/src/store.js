import Vue from 'vue'
import Vuex from 'vuex'
import location from './Modeules/location'
import favorites from './Modeules/favorites.js'
import customStyle from './Modeules/customStyle.js'
import apiDetails from './Modeules/apiDetails.js'

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
    location,
    favorites,
    customStyle,
    apiDetails
  }
})
