import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const TagBlock = styled.div`
  margin-top: .5rem;
  .tag {
    display: inline-block;
    color: ${palette.red[7]};
    text-decoration: none;
    margin-right: .5rem;
    &:hover { color: ${palette.red[6]}; } 
  }
`;

const Tags = ({ tags }) => {
  return (
    <TagBlock>
      {tags.map(tag => (
        <Link className="tag" to={`/?tag=${tag}`} key={tag}>
          #{tag}
        </Link>
      ))}
    </TagBlock>
  );
};

export default Tags;