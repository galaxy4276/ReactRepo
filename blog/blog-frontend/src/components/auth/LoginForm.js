import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import { withRouter } from 'react-router-dom';
import AuthForm from './AuthForm';
import { check } from '../../modules/user';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const { form, authError, auth, user } = useSelector(
    ({ auth, user }) => ({
      form: auth.login,
      authError: auth.authError,
      auth: auth.auth,
      user: user.user,
    }));

  useEffect(() => {
    dispatch(initializeForm('login'))
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      setError('로그인 실패');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not Working.');
      }
    }
  }, [history, user]);

  const onChange = useCallback((e) => {
    const { value, name } = e.target;
    dispatch(changeField({
      form: 'login',
      key: name,
      value
    }));
  }, [dispatch]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  }, [form, dispatch]);

  return (
    <AuthForm
      type='login'
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);