import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import Message from './components/Message.vue';
import Users from './components/Users.vue';
import Todos from './components/Todos.vue';

// global component, we regard Message as a local component instead.
// Vue.component('app-message', Message);

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/users/:teamId', component: Users },
    { path: '/', component: Message },
    { path: '/todos', component: Todos }
  ]
});

new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
});
