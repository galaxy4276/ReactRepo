import React from 'react';
import ReactDOM from 'react-dom';
import FriendMain from "./container/FriendMain";
import TimelineMain from "./container/TimelineMain";
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store} >
    <div>
      <FriendMain />
      <TimelineMain />
    </div>
  </Provider>,
  document.getElementById('root')
);

