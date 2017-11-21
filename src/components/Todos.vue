<template>
  <div>
    <h1>To do component</h1>
    <hr>
    <h3>Add new todo</h3>
    <form>
      <label>Todo title: </label>
      <input type="text" v-model="newTodo.title">
      <p>New todo: {{detail}}</p>
      <input type="submit" value="Submit" @click="addNewTodo">
    </form>
    <hr>
    <h3>List todos</h3>
    <ul>
      <li v-for="(todo,i) in todos" v-bind:key="i">
        <label v-for="(val,key) in todo" :key="key">
          <!-- 遍历 obj，在不确定属性时候用 -->
          {{key}} - {{val}}
        </label>
        <br>
        <input type="checkbox" :value="todo.completed" @click="todo.completed = !todo.completed">
        <span :class="{completed: todo.completed}">{{todo.title | toUpper}}</span>
        <button @click="deleteTodo(todo)">x</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        newTodo: {},
        todos: [{
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          }
        ]
      }
    },
    methods: {
      addNewTodo(e) {
        e.preventDefault();

        this.todos.push({
          "userId": 1,
          "title": this.newTodo.title,
          "completed": false
        })
      },
      deleteTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1)
      }
    },
    filters: {
      toUpper(value) {
        return value.toUpperCase();
      }
    },
    computed: {
      detail() {
        return `${this.newTodo.title}, and it's not completed by default`
      }
    },
    created() {
      return this.$http.get('http://jsonplaceholder.typicode.com/todos').then(res => {
        this.todos = res.data.slice(0, 10);
      })
    }
  }

</script>

<style scoped>
  .completed {
    text-decoration: line-through;
  }

</style>
