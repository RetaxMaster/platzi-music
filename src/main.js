import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import EventBus from "@/plugins/event-bus"
import routes from '@/routes.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(EventBus);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
