import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes : routes
});

new Vue({
  el: '#app',
  router, // works as key and value name is same. es6.
  render: h => h(App)
})
