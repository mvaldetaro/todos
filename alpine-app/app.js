function addTodo(todoText) {
  Alpine.store("todos").push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener("alpine:init", () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  Alpine.store("todos", todos);
});
