import React from 'react';

const FriendList = ({ friends }) => {
  return (
    <div>
      {friends.map(friend => (
        <li key={friend.id}>{friend.name}</li>
      ))}
    </div>
  );
};

export default FriendList;