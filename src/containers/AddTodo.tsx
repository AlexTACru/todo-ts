import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { addTodo, IAddTodoAction } from "../actions/todos";
import AddTodoForm from '../components/AddTodoForm/index';

const mapDispatchToProps = (dispatch: Dispatch<IAddTodoAction>) => ({
  handleSubmit: (name: string) => dispatch(addTodo(name))
});

export default connect<any, any, any>(null, mapDispatchToProps)(AddTodoForm);
