const root = document.body;

const App = {
  todos: [],
  todoText: "",
  addTodo: function (e) {
    e.preventDefault();
    App.todos = [...App.todos, App.todoText];
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
  oninit: function () {
    App.todos = JSON.parse(localStorage.getItem("todos")) || [];
  },
  view: function () {
    return [
      m(
        "ul",
        App.todos.map((todo) => m("li", todo))
      ),
      m(
        "form",
        {
          onsubmit: function (e) {
            App.addTodo(e);
          },
        },
        [
          m("input", {
            type: "text",
            value: App.todoText,
            onchange: (e) => (App.todoText = e.target.value),
          }),
          m("button", { type: "submit" }, "Adicionar Tarefa"),
        ]
      ),
    ];
  },
};

m.mount(root, App);
