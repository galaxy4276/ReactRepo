import React, { useCallback } from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getItem, getReset, todoInput} from "../redux/todo";


const Input = () => {
  const { id, input } = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const onChange = useCallback(e => {
    dispatch(todoInput(e.target.value));
  }, []);

  const onReset = useCallback(() => {
    dispatch(getReset());
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.length >= 30)
      return alert('30자 미만으로 작성해주세요.');
    if (input.trim() === '')
      return alert('내용을 입력하세요.');
    const item = {
      id,
      content: input
    };

    dispatch(getItem(item));
  };

  return (
    <StyledInputLayout onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        onChange={onChange}
        value={input}
      />
      <div>
        <button type="submit" onClick={onSubmit} >+</button>
        <button type="button" onClick={onReset}>RESET</button>
      </div>
    </StyledInputLayout>
  );
};

const StyledInputLayout = styled.form`
  display: flex;

  input {
    margin: 0 1.5rem 0 10rem;
    width: 30rem;
    padding: 1rem;
    outline: none;
    border-style: none;
    box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.25);
  }

  button:first-child {
    margin-right: 10px;
  }

  button {
    padding: 1rem;
    border-style: none;
    background-color: #ff75a0;
    font-family: "Roboto";
    transition: all .2s linear;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.15);
  }

  button:hover {
    transition: all .2s linear;
    background-color: #ff4477;
  }
`;

export default Input;