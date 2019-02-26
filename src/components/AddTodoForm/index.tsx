import * as React from "react";
import { ChangeEvent, FormEvent } from "react";

import './index.css';

interface IProps {
  handleSubmit: (value: string) => void;
}
interface IState {
  value: string;
}

export default class AddTodoForm extends React.Component<IProps, IState> {
  public state = {
    value: "",
  };

  private updateValue = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.currentTarget;
    this.setState({ value });
  };

  private handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    const { value } = this.state;
    const { handleSubmit } = this.props;

    ev.preventDefault();

    if (!value.trim()) return;

    handleSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    const { handleSubmit, updateValue } = this;

    return (
      <form className="add-todo-form__form" onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={updateValue}/>
        <button type="submit">Add todo</button>
      </form>
    );
  }
}
