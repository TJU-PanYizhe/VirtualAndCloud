import Vue from 'vue'
import App from './App.vue'

// vue-router
import VueRouter from 'vue-router'
import router from './router/index'
Vue.use(VueRouter)

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// Global
import Global from "./components/Global"
Vue.prototype.GLOBAL = Global

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
