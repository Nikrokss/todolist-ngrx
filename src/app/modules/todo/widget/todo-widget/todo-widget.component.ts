import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {TodoState} from "../../store/todo/todo.reducer";
import {create, deleteTask, toggle} from "../../store/todo/todo.actions";
import {todoListSelector} from "../../store/todo/todo.selectors";
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit {

  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<TodoState>) { }

  ngOnInit(): void {
  }

  onCreate(title: string) {
    this.store$.dispatch(create({title}));
  }

  onDelete(taskId: number) {
    this.store$.dispatch(deleteTask({taskId}));
  }

  onToggle(taskId: number) {
    this.store$.dispatch(toggle({taskId}));
  }
}
