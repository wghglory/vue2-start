import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Message from './Message.vue';
import Users from './Users.vue';

// global component
Vue.component('app-message', Message);

Vue.use(VueRouter);

const routes = [{ path: '/users', component: Users }, { path: '/', component: Message }];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
});
