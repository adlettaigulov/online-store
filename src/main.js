import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router/router'
Vue.config.productionTip = false

new Vue({
  // Рендер страницы App.vue
  render: h => h(App),
  // Подключение Store
  store, 
  router
}).$mount('#app')
