// Pega elementos do DOM

const form = document.querySelector("form");
const input = document.querySelector("[name='todo']");
const todoList = document.querySelector("#todos");

// Efeitos colaterais e ciclo de vida

const todos = JSON.parse(localStorage.getItem("todos")) || [];

const todoData = [];

todos.forEach((todo) => {
  addTodo(todo);
});

function addTodo(todoText) {
  todoData.push(todoText);
  const li = document.createElement("li");
  li.innerHTML = todoText;
  todoList.appendChild(li);
  localStorage.setItem("todos", JSON.stringify(todoData));
  input.value = "";
}

// Eventos

form.onsubmit = function (e) {
  e.preventDefault();
  addTodo(input.value);
};
