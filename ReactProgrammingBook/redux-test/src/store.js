import {combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import timelineReducer from './timeline/state';
import friendReducer from './friend/state';


const reducer = combineReducers({
  timeline: timelineReducer,
  friend: friendReducer,
});

const store = createStore(reducer, composeWithDevTools());
export default store;