import React from 'react';
import styled from 'styled-components';
import Todo from './Todo';
import Done from './Done';


const TodoLayout = () => {
  return (
    <StyledTodoLayout>
      <Todo />
      <Done />
    </StyledTodoLayout>
  );
};

const StyledTodoLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;


export default TodoLayout;