<template>
  <div>
    <h1>this is a message</h1>
    <app-input></app-input>
  </div>
</template>

<script>
// local component
import Input from './Input.vue'

export default {
  components: {
    'app-input': Input
  }
}
</script>
