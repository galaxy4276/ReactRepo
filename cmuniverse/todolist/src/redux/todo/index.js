import {createAction, handleActions} from 'redux-actions';


// 액션
const INPUT = 'todo/INPUT';
const RESET = 'todo/RESET';
const ITEM_TO_DONE = 'todo/ITEM_TO_DONE';
const DONE_TO_ITEM = 'todo/DONE_TO_ITEM';
const CANCEL_TODO = 'todo/CANCEL_TODO';
const CANCEL_DONE = 'todo/CANCEL_DONE';
const GET_ITEM = 'todo/GET_ITEM';


// 액션 생성 함수
export const todoInput = createAction(INPUT, input => input);
export const getReset = createAction(RESET);
export const getItem = createAction(GET_ITEM, item => item);
export const itemToDone = createAction(ITEM_TO_DONE, item => item);
export const doneToItem = createAction(DONE_TO_ITEM, item => item);
export const cancelTodo = createAction(CANCEL_TODO, item => item);
export const cancelDone = createAction(CANCEL_DONE, item => item);


// 초기 상태 값
const INITIAL_STATE = {
  id: 1,
  todo: [],
  done: [],
  input: '',
};


// 리듀서
const reducer = handleActions(
  {
    [INPUT]: (state, { payload: input }) => ({
      ...state,
      input,
    }),
    [RESET]: (state) => ({
      ...state,
      todo: [],
      done: [],
    }),
    [GET_ITEM]: (state, { payload: item }) => ({
      ...state,
      input: '',
      id: state.id + 1,
      todo: state.todo.concat(item),
    }),
    [ITEM_TO_DONE]: (state, { payload: todo }) => ({
      ...state,
      done: state.done.concat(todo),
    }),
    [DONE_TO_ITEM]: (state, { payload: done }) => ({
      ...state,
      todo: state.todo.concat(done),
    }),
    [CANCEL_DONE]: (state, { payload: item }) => ({
      ...state,
      done: state.done.filter(done => done.id !== item.id)
    }),
    [CANCEL_TODO]: (state, { payload: item }) => ({
      ...state,
      todo: state.todo.filter(todo => todo.id !== item.id)
    }),
  },
  INITIAL_STATE
);

export default reducer;