import * as todosReducer from './Todos';
import { ActionTypes } from '../actions/todos';

const todo = {
  id: 0,
  name: 'test',
  done: false,
};

describe('Todos reducer', () => {
  test('Initial state', () => {
    const action = { type: 'fake_action', payload: {} };
    const { initialState } = todosReducer;

    expect(todosReducer.reducer(undefined, action)).toEqual(initialState)
  });

  test('Add Todo', () => {
    const action = {
      type: ActionTypes.ADD_TODO,
      payload: { todo },
    };
    const expectedState = {
      todos: [
        todo,
      ]
    };

    expect(todosReducer.reducer(undefined, action)).toEqual(expectedState);
  });

  test('Toggle todo', () => {
    const action = {
      type: ActionTypes.TOGGLE_TODO,
      payload: { todoId: 0 },
    };
    const initialState = { todos: [todo] };
    const expectedState = {
      todos: [
        {
          ...todo,
          done: true,
        }
      ]
    };

    expect(todosReducer.reducer(initialState, action)).toEqual(expectedState)
  })
});
