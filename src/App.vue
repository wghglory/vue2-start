<template>
  <div id="app">
    <h1>Below is rendered by router. `yarn add vue-router`</h1>
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
