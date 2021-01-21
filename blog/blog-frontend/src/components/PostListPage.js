import React from 'react';
import HeaderContainer from './common/HeaderContainer';
import PostListContainer from './post/PostListContainer';
import PaginationContainer from './post/PaginationContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;