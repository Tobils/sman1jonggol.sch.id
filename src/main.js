import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import ProductZoomer from 'vue-product-zoomer'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ProductZoomer)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
