// App.vue 中使用两次 Users routeLink，在他们之间切换时候 vue 并没有 destroy 并重新创建，而是还使用之前的
// 所以看到 created alert 只触发了一次。
// 只有当切换到 Message 组件，再切换到 Users 时才会重新创建。
// 从性能角度说这样设计很好，但我们可能有个方法就像 alert 一样并希望他每次都执行。使用 watch 解决
<template>
  <div>
    <div>This is users component</div>
    <p>Team Id is {{ teamId }}</p>
    <button @click="toMessage">Go to Message</button>
  </div>
</template>

<script>
  export default {
    watch: {
      '$route'(to, from) {
        alert(to.params.teamId)
      }
    },
    data() {
      return {
        teamId: this.$route.params.teamId
      }
    },

    created() {
      alert(this.$route.params.teamId)
    },

    methods: {
      // 代码主动切换路由
      toMessage() {
        this.$router.push('/')
      }
    }
  }
</script>
