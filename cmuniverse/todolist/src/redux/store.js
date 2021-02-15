import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import todoReducer from './todo';

const reducer = combineReducers({
  todo: todoReducer
});

const store = createStore(reducer, composeWithDevTools());

export default store;