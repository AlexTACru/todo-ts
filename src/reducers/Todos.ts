import Todo from "../models/Todo";
import { Action, ActionTypes } from "../actions/todos";

export interface IState {
  todos: Todo[];
}

export const initialState: IState = {
  todos: []
};

export function reducer(state: IState = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const { todo } = action.payload;

      return {
        ...state,
        todos: [
          ...state.todos,
          todo,
        ]
      };
    case ActionTypes.TOGGLE_TODO:
      const { todoId } = action.payload;

      return {
        ...state,
        todos: state.todos.map(
          (todoItem) => todoItem.id === todoId
            ? {
              ...todoItem,
              done: !todoItem.done,
            }
            : todoItem)
      };
    default:
      return state;
  }
}
