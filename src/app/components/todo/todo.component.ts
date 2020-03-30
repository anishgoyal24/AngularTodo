import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/Todo'
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo){
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }

  addTodo(todo: Todo){
    this.todoService.addTodo(todo).subscribe(todo => {
      console.log(todo);
      this.todos.push(todo);
    });
  }

}
