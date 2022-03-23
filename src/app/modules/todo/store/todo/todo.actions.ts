import {createAction, props} from "@ngrx/store";

export const create = createAction(
  '[TODO] create todo item',
  props<{ title: string }>()
);

export const toggle = createAction(
  '[TODO] toggle todo item',
  props<{ taskId: number }>()
);

export const deleteTask = createAction(
  '[TODO] deleteTask todo item',
  props<{ taskId: number }>()
);
