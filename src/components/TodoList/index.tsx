import * as React from 'react';
import { FormEvent } from 'react';

import Todo from '../../models/Todo';

import './index.css';

interface IProps {
  todos: Todo[];
  onTodoClicked: (event: FormEvent<HTMLElement>) => void;
}

interface IState {}

export default class TodoList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const {
      todos,
      onTodoClicked,
    } = this.props;

    return (
      <ul>
        {(todos.length > 0) && todos.map((todo) => (
          <li
            key={todo.id}
            onClick={onTodoClicked}
            data-id={todo.id}
            className={`todo__item ${
              todo.done && 'todo__item--done'
            }`}
          >
            {todo.name}
          </li>
        ))}
      </ul>
    );
  }
}
