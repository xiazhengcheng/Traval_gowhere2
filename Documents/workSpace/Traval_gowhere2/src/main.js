// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import store from './store'
import '@/../node_modules/swiper/dist/css/swiper.css'
import '../src/assets/styles/reset.css'
import '../src/assets/styles/iconfont.css'
import '@/components/bus/bus'



Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
const Bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data:{
    Bus
  },
  components: { App },
  template: '<App/>'
})
