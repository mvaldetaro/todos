import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de tarefas - Angular';

  // State
  todos: string[] = [];
  todoText: string = '';

  // Lifecycle
  ngOnInit(): void {
   this.todos = JSON.parse(localStorage.getItem("todos") as string) || [];
  };

  // Events
  addTodo() {
    this.todos.push(this.todoText);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
