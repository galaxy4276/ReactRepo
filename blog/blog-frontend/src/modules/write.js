import { createAction, handleActions } from 'redux-actions';
import * as postsAPI from '../lib/api/post';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FILED = 'write/CHANGE_FILED';
const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE
]  = createRequestActionTypes('write/WRIT E_POST');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FILED, ({ key, value}) => ({
  key,
  value,
}));
export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}));

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState = {
  title: '',
  body: '',
  tags: [],
  post: null,
  postError: null,
};

const write = handleActions(
  {
    [INITIALIZE]: state => initialState,
    [CHANGE_FILED]: (state, { payload: { key, value }}) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_POST]: state => ({
      ...state,
      postError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      postError: null,
      post,
    }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

export default write;