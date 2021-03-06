import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";

import {TODO_REDUCER_NODE, todoReducer} from "./store/todo/todo.reducer";
import {TodoPageComponent} from './page/todo-page/todo-page.component';
import {todoRoutes} from "./routes";
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import {FormsModule} from "@angular/forms";
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';



@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    TodoListUiComponent
  ],
    imports: [
        CommonModule,
        StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
        RouterModule.forChild(todoRoutes),
        FormsModule
    ]
})
export class TodoModule { }
