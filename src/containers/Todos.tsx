import { FormEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { getTodos } from '../selectors/todos';
import { toggleTodo, IToggleTodoAction } from '../actions/todos';
import { IState } from '../reducers';
import TodoList from '../components/TodoList';

const mapStateToProps = (state: IState) => ({
  todos: getTodos(state),
});

const mapDispatchStateToProps = (dispatch: Dispatch<IToggleTodoAction>) => ({
  onTodoClicked: (event: FormEvent<HTMLElement>) => {
    const todoId: number = +(event.currentTarget.dataset.id || 0);
    dispatch(toggleTodo(todoId));
  },
});

export default connect<any, any, any>(mapStateToProps, mapDispatchStateToProps)(TodoList);
