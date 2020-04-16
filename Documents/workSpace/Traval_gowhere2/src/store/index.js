import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './user'
import city from './city'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    city,
  }, getters
})
export default store