import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Pagination from './Pagination';

const PaginationContainer = ({ location }) => {
  const { lastPage, posts, loading } = useSelector(
    ({ posts, loading }) => ({
      lastPage: posts.lastPage,
      posts: posts.posts,
      loading: loading['posts/LIST_POSTS'],
    }),
  );

  if (!posts || loading) return null;

  const { tag, username, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default withRouter(PaginationContainer);