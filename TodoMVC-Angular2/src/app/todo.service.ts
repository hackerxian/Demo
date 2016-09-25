/**
 * Created by xianda on 16/9/24.
 */

import { Injectable }    from '@angular/core';

import { Todo } from './todo';

@Injectable()
export class TodoService {
  todos: Todo[];
  constructor() {
    let persistedTodos = JSON.parse(localStorage.getItem('angular2-todos') || '[]');
    // Normalize back into classes
    this.todos = persistedTodos.map((todo: {title: string, completed: boolean}) => {
      let ret = new Todo(todo.title);
      ret.completed = todo.completed;
      return ret;
    });
  }

  private updateStore() {
    localStorage.setItem('angular2-todos', JSON.stringify(this.todos));
  }

  add(newTodoText) {
    let todo = new Todo(newTodoText);
    this.todos.push(todo);
    this.updateStore();
  }

  remove(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.updateStore();
  }

  getRemaining() {
    return this.todos.filter(todo => !todo.completed);
  }

  getCompleted() {
    return this.todos.filter(todo => todo.completed);
  }

  save(todos) {
    this.todos = todos;
    this.updateStore();
  }

  toggleAll(checked: boolean): void {
    this.todos.forEach(todo => {
      todo.completed = checked;
    });
    this.updateStore();
  }
}
