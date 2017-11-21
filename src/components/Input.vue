// 父组件传过来 msg 作为初始值。
// 改变 input emit 事件并传递参数，父级订阅该事件并可以使用子级的参数
<template>
  <div>
    <!-- <input type="text" v-model="message"> -->
    <input type="text" v-bind:value="msg" v-on:input="changeMessage">
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    props: ['msg'],
    // props: {
    //   'msg': {
    //     type: String,
    //     default: 'default message',
    //     required: true
    //   }
    // },
    data() {
      return {
        message: ''
      }
    },
    methods: {
      changeMessage(event) {
        this.message = event.target.value;
        this.$emit('messageChanged', this.message)
      }
    }
  }

</script>
