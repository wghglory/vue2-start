<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <!-- place to put the routing component -->
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    data() {
      return {}
    },
    components: {
      'app-header': Header
    }
  }

</script>

<style>
  body {
    margin: 0;
    font-family: 'Nunito SemiBold';
  }

</style>
