import React, {useEffect, useReducer} from 'react';
import store from "../store";
import {addFriend} from "../friend/state";
import FriendList from "../component/FriendList";
import {getNextFriend} from "../common/mockData";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import NumberSelect from "../component/NumberSelect";
import {MAX_AGE_LIMIT, MAX_SHOW_LIMIT} from "../friend/common";


const FriendMain = () => {
  const [
    ageLimit,
    showLimit,
    friendsWithAgeLimit,
    friendsWithAgeShowLimit
  ] = useSelector(state => {
    const { friends, ageLimit, showLimit } = state.friend;
    const friendsWithAgeLimit = friends.filter(
      friend => friend.age <= ageLimit
    );

    return [
      ageLimit,
      showLimit,
      friendsWithAgeLimit,
      friendsWithAgeLimit.slice(0, showLimit)
    ];
  }, shallowEqual);

  const dispatch = useDispatch();

  const onAdd = () => {
    const friend = getNextFriend();
    dispatch(addFriend(friend));
  }
  console.log('FriendMain render');

  return (
    <div>
      <button onClick={onAdd}>친구 추가</button>
      <NumberSelect
        onChange={v => dispatch(actions.setAgeLimit(v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix="세 이하만 보기"
      />
      <FriendList friends={friendsWithAgeLimit}/>
      <NumberSelect
        onChange={v => dispatch(actions.setShowLimit(v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix="명 이하만 보기 (연령 제한 적용)"
      />
      <FriendList friends={friendsWithAgeShowLimit} />
    </div>
  );
};

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];

export default FriendMain;
/*  const [, forceUpdate] = useReducer(v => v + 1, 0);
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
  const friends = store.getState().friend.friends;*/
