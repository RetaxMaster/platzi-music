import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";

import EventBus from "@/plugins/event-bus"
import routes from "@/routes";

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(EventBus);

const router = VueRouter({routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
