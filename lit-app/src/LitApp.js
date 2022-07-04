import { LitElement, html } from "lit";

export class LitApp extends LitElement {
  static get properties() {
    return {
      todos: { type: Array },
      todoText: { type: String },
    };
  }

  constructor() {
    super();
    this.todos = [];
    this.todoText = "";
  }

  connectedCallback() {
    super.connectedCallback();
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
  }

  addTodo(e) {
    e.preventDefault();
    this.todos = [...this.todos, this.todoText];

    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  render() {
    return html`
      <ul>
        ${this.todos.map((todo) => html`<li>${todo}</li>`)}
      </ul>
      <form @submit="${this.addTodo}">
        <input
          type="text"
          .value=${this.todoText}
          @change=${(e) => (this.todoText = e.target.value)}
        />
        <button type="submit">Adicionar Tarefa</button>
      </form>
    `;
  }
}
