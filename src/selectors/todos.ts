import { IState } from '../reducers';
import { createSelector } from 'reselect';

const getTodosState = ((state: IState) => state.todos);

export const getTodos = createSelector([getTodosState], (state) => state.todos);
