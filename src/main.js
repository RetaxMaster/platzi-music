import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import EventBus from "@/plugins/event-bus"
import msToMm from "@/filters/ms-to-mm"
import blur from "@/directives/blur"
import routes from '@/routes.js'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(EventBus);
Vue.use(msToMm);
Vue.use(blur);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
