import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @State() todos = [];
  @State() todoText = '';

  componentWillLoad() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  private addTodo(e) {
    e.preventDefault();
    this.todos = [...this.todos, this.todoText];
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  render() {
    return (
      <div class="app-home">
        <ul>
          {this.todos.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <form onSubmit={e => this.addTodo(e)}>
          <input type="text" value={this.todoText} name="todo" placeholder="Digite sua tarefa" onChange={(e: any) => (this.todoText = e.target.value)} />
          <button type="submit">Adicionar Tarefa</button>
        </form>
      </div>
    );
  }
}
