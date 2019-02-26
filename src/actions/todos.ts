import Todo from "../models/Todo";

export enum ActionTypes {
  ADD_TODO = "[todos] ADD_TODO",
  TOGGLE_TODO = "[todos] TOGGLE_TODO",
}

export interface IAddTodoAction {
  payload: { todo: Todo };
  type: ActionTypes.ADD_TODO;
}

export interface IToggleTodoAction {
  payload: { todoId: number };
  type: ActionTypes.TOGGLE_TODO;
}

let nextId = 0;

export function addTodo(name: string): IAddTodoAction {
  return {
    payload: {
      todo: {
        done: false,
        id: nextId++,
        name,
      },
    },
    type: ActionTypes.ADD_TODO,
  };
}

export function toggleTodo(todoId: number): IToggleTodoAction {
  return {
    payload: { todoId },
    type: ActionTypes.TOGGLE_TODO,
  };
}

export type Action = IAddTodoAction | IToggleTodoAction;
