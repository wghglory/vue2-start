import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes';

import App from './App.vue';

// global component, we regard Message as a local component instead.
// Vue.component('app-message', Message);

Vue.use(VueRouter);
Vue.use(VueResource);

// Register routes
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
});
