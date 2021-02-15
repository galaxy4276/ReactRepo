import React from 'react';
import Item from "./Item";
import {useSelector} from "react-redux";
import StyledTodoBox from "../common/StyledTodoBox";
import StyledAlert from "../common/StyledAlert";


const Done = () => {
  const dones = useSelector(state => state.todo.done);

  return (
    <StyledTodoBox>
      <h1>Done</h1>
      {dones.length === 0 && (
        <StyledAlert>ToDo 항목을 완료하세요.</StyledAlert>
      )}
      {dones && dones.map(item => (
        <Item key={item.id} item={item} isDone={true} />
      ))}
    </StyledTodoBox>
  );
};

export default Done;