import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$url='http://localhost:4201/api'
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
