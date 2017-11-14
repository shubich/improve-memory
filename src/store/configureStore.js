import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import main from '../reducers/main';
import letters from '../reducers/letters';

const memoryApp = combineReducers({
  main,
  letters,
});

const store = createStore(
  memoryApp,
  applyMiddleware(thunk),
);

export default store;
