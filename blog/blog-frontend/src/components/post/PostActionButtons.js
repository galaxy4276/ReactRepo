import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const PostActionButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.button`
  padding: .25rem .5rem;
  border-radius: 4px;
  color: ${palette.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: .875rem;
  cursor: pointer;
  
  &:hover {
    background: ${palette.gray[1]};
    color: ${palette.red[7]};
  }
  
  & + & { margin-left: .25rem; }
`;

const PostActionButtons = ({ onEdit }) => {
  return (
    <PostActionButtonBlock>
      <ActionButton onClick={onEdit}>수정</ActionButton>
      <ActionButton>삭제</ActionButton>
    </PostActionButtonBlock>
  );
};

export default PostActionButtons;