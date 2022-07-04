<script>
  import { onMount } from "svelte";

  let todos = [];
  let todoText = "";

  onMount(() => {
    todos = JSON.parse(localStorage.getItem("todos")) || [];
  });

  function addTodo() {
    todos = [...todos, todoText];
    localStorage.setItem("todos", JSON.stringify(todos));
  }
</script>

<main>
  <ul>
    {#each todos as todo}
      <li>{todo}</li>
    {/each}
  </ul>
  <form on:submit|preventDefault={addTodo}>
    <input type="text" bind:value={todoText} placeholder="Digite sua tarefa" />
    <button type="submit">Adicionar Tarefa</button>
  </form>
</main>

<style>
</style>
