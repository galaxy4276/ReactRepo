import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;