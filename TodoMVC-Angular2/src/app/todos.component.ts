import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import {Todo} from './todo';
import {TodoService} from "./todo.service";

@Component({
  selector   : 'todos',
  templateUrl: 'todos.component.html',
})

export class TodosComponent implements OnInit{
  todos: Todo[] = [];
  constructor(
    private router: Router,
    private todoService: TodoService
  ) {}

  addTodo(newTodoText: string): void {
    if (!newTodoText.trim()) {
      return;
    }
    this.todoService.add(newTodoText);
  }

  toggleCompleted(todo: Todo): void {
    todo.completed = !todo.completed;
    this.todoService.save(this.todos);
  }

  remove (todo: Todo): void {
    this.todoService.remove(todo);
  }

  getRemaining() {
    return this.todoService.getRemaining();
  }

  getCompleted() {
    return this.todoService.getCompleted();
  }

  clearComplete(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
    this.todoService.save(this.todos);
  }

  allCompleted(): boolean {
    return this.todos.length === this.getCompleted().length;
  }

  toggleAll(checked: boolean): void {
    this.todoService.toggleAll(checked);
  }

  editTodo(todo: Todo): void {
    todo.editing = true;
  }

  updateTodo(todo: Todo, editedTitle: string): void {
    editedTitle = editedTitle.trim();
    todo.editing = false;
    if (editedTitle.length === 0) {
      return this.remove(todo);
    }
    todo.title = editedTitle;
    this.todoService.save(this.todos);
  }

  stopEditing(todo: Todo, editedTitle: string): void {
    if (todo.editing === false) {
      return;
    }
    todo.title = editedTitle;
    todo.editing = false;
  }

  cancelEditing(todo) {
    todo.editing = false;
  }

  ngOnInit(): void {
    switch (this.router.url) {
      case '/active':
        this.todos = this.todoService.getRemaining();
        break;
      case '/completed':
        this.todos = this.todoService.getCompleted();
        break;
      default:
        this.todos = this.todoService.todos;
    }
  }
}
