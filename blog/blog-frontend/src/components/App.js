import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import PostListPage from './PostListPage';
import PostPage from './PostPage';
import RegisterPage from './RegisterPage';
import WritePage from './WritePage';

const App = () => {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
};

export default App;