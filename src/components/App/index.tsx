import * as React from 'react';

import AddTodo from '../../containers/AddTodo';
import Todos from '../../containers/Todos';

import './index.css';

const App = () => {
  return (
    <div className="container">
      <h1>Todos</h1>
      <AddTodo />
      <Todos />
    </div>
  );
};

export default App;
