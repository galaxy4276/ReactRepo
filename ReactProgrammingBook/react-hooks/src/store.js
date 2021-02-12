import {applyMiddleware, createStore} from 'redux';

const middleware1 = store => next => action => {
  console.log('middleware1 start');
  console.log(next);
  console.log(action);
  const result = next(action);
  console.log('middleware1 end');
  return result;
};

const middleware2 = store => next => action => {
  console.log('middleware2 start');
  console.log(next);
  console.log(action);
  const result = next(action);
  console.log('middleware2 end');
  return result;
};

const myReducer = (state, action) => {
  console.log('myReducer');
  return state;
};

const store = createStore(myReducer, applyMiddleware(
  middleware1,
  middleware2,
));

store.dispatch({ type: 'someAction' });

export default store;