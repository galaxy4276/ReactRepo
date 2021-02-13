import React, {useEffect, useReducer} from 'react';
import store from "../store";
import {addFriend} from "../friend/state";
import FriendList from "../component/FriendList";
import {getNextFriend} from "../common/mockData";


const FriendMain = () => {
  const [, forceUpdate] = useReducer(v => v + 1, 0);
  useEffect(() => {
    let prevFriends = store.getState().friend.friends;
    const unsubscribe = store.subscribe(() => {
      const friends = store.getState().friend.friends;
      if (prevFriends !== friends) {
        forceUpdate();
      }
      prevFriends = friends;
    });
    return () => unsubscribe();
  }, []);
  const onAdd = () => {
    const friend = getNextFriend();
    store.dispatch(addFriend(friend));
  }
  console.log('FriendMain render');
  const friends = store.getState().friend.friends;

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <FriendList friends={friends} />
    </div>
  );
};

export default FriendMain;