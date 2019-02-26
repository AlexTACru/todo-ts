import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { IState, reducer, initialState } from '../reducers';

const store = createStore<IState>(
  reducer(),
  initialState,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
