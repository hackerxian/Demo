/**
 * Created by xianda on 16/9/24.
 */

export class Todo {
  title: string;
  completed: boolean;
  editing: boolean;

  constructor(title: string) {
    this.title = title.trim();
    this.completed = false;
    this.editing =false;
  }
}
