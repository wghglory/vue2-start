<template>
  <div id="app">
    <h1>Below is rendered by router. `yarn add vue-router`</h1>
    <hr>
    <router-link to="/">Message</router-link>
    <router-link to="/users/10">User 10</router-link>
    <router-link to="/users/12">User 12</router-link>
    <hr>
    <router-view></router-view><!-- place to put the routing component -->
    <!-- <app-message></app-message> -->
  </div>
</template>

<script>
// import Message from './Message.vue'

export default {
  data () {
    return {
    }
  },
  // components: {
  //   'app-message': Message
  // }
}
</script>

<style>
</style>
