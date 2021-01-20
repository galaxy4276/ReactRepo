import React from 'react';
import AuthTemplate from './auth/AuthTemplate';
import LoginForm from './auth/LoginForm';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;