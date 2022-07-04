<script>
export default {
  name: "TodoList",
  data: function () {
    return {
      todos: [],
      todoText: "",
    };
  },
  methods: {
    addTodo: function () {
      this.todos = [...this.todos, this.todoText];
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  mounted: function () {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    console.log("Teste");
  },
};
</script>

<template>
  <ul>
    <li v-for="todo in todos" v-bind:key="todo">{{ todo }}</li>
  </ul>
  <form v-on:submit.prevent="addTodo">
    <input type="text" v-model="todoText" placeholder="Digite sua tarefa" />
    <button type="submit">Adicionar</button>
  </form>
</template>

<style scoped></style>
