// Message.vue 作为父级组件，要和 Input.vue 子组件通信
// 父组件 → 子组件：父组件传递 msg 属性，子组件 props 接收  v-bind:msg="message"
// 子组件 → 父组件：子组件 emit，父组件订阅事件 v-on:messageChanged="updateParentFromChild"
<template>
  <div>
    <h1 v-cloak>{{message}}</h1>
    <app-input v-bind:msg="message" v-on:messageChanged="updateParentFromChild"></app-input>
  </div>
</template>

<script>
// local component
import Input from './Input.vue'

export default {
  data() {
    return {
      message: 'this is the initial message'
    }
  },
  components: {
    'app-input': Input
  },
  methods: {
    updateParentFromChild($event){
      this.message = $event
    }
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
