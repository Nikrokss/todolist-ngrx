import {createReducer, on} from "@ngrx/store";

import {Todo} from '../../model/todo'
import {create, deleteTask, toggle} from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: Todo[];
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: []
}

export const todoReducer = createReducer(
  initialState,
  on(create, (state, {title}) => ({
    ...state,
    idIncrement: state.idIncrement + 1,
    todoList: [
      {
        taskId: state.idIncrement,
        title,
        completed: false
      },
      ...state.todoList
    ]
  })),
  on(toggle, (state, {taskId}) => ({
    ...state,
    todoList: state.todoList.map(task => task.taskId === taskId ? {
      ...task,
      completed: !task.completed
    } : task)
  })),
  on(deleteTask, (state, {taskId}) => ({
    ...state,
    todoList: state.todoList.filter(task => task.taskId !== taskId),
  })),
);
