import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import {routes} from './routes'
import {instance}  from './axios'


import {store} from './store/store';


Vue.use(VueRouter);

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  mode : 'history',
  routes: routes
})

Vue.prototype.$http = instance;

new Vue({
  el: '#app',
  router,
  store : store,
  render: h => h(App)
})
