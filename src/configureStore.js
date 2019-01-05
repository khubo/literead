import { createStore } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const logger = createLogger();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// add root-reducer here

export default store;
