import React from 'react';
import {useSelector} from "react-redux";
import Item from './Item';
import StyledTodoBox from "../common/StyledTodoBox";
import StyledAlert from "../common/StyledAlert";


const Todo = () => {
  const todos = useSelector(state => state.todo.todo);

  return (
    <StyledTodoBox>
      <h1>To Do</h1>
      {todos.length === 0 && (
        <StyledAlert>할 일을 작성하세요!</StyledAlert>
      )}
      {todos && todos.map(item => (
        <Item key={item.id} item={item} isDone={false} />
      ))}
    </StyledTodoBox>
  );
};



export default Todo;