import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import constants from './constants'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.prototype.$appName = 'My App'
Vue.use(constants)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


