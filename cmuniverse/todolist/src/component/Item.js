import React from 'react';
import styled from 'styled-components';
import {useDispatch} from "react-redux";
import {itemToDone, doneToItem, cancelDone, cancelTodo} from "../redux/todo";

const Item = ({ item, isDone }) => {
  const dispatch = useDispatch();

  return (
    <StyledItem>
      <span>{ item.content }</span>
      <div className="button__wrapper">
        {
          isDone
            ?
            (
              <div>
                <button
                  onClick={() => dispatch(cancelDone(item))}
                  className='cancel__btn'
                >
                  X
                </button>
                <button
                  onClick={() => {
                    console.log(item);
                    dispatch(cancelDone(item));
                    dispatch(doneToItem(item));
                  }}
                  className='check__btn'
                >
                  취소
                </button>
              </div>
            )
            :
            (
              <div>
                <button
                  onClick={() => dispatch(cancelTodo(item))}
                  className='cancel__btn'
                >
                  X
                </button>
                <button
                  onClick={() => {
                    dispatch(cancelTodo(item));
                    dispatch(itemToDone(item));
                  }}
                  className='check__btn'
                >
                  V
                </button>
              </div>
            )
        }
      </div>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  background-color: #f4f9f9;
  border-radius: 3px;
  margin-bottom: .5rem;
  font-size: 1.5rem;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.15);

  span {
    flex: 1;
    margin-left: .5rem;
  }

  .button__wrapper {
    button {
      margin: .5rem;
      border-style: none;
      font-family: "Roboto";
      transition: all .2s linear;
    }

    button.cancel__btn {
      background-color: #ff75a0;

      &:hover {
        transition: all .2s linear;
        background-color: #ff4477;
      }
    }

    button.check__btn {
      background-color: #ccf2f4;

      &:hover {
        transition: all .2s linear;
        background-color: #8cbec1;
      }
    }
  }

  .button__wrapper div {
    display: flex;
    align-items: center;

    button {
      height: 20px;
    }
  }
`;

export default Item;