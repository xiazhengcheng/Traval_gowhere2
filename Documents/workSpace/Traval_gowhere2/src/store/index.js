import Vue from 'vue'
import Vuex from 'vuex'
import getter from './getter'
import task from './task'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    task
  }, getter
})
export default store