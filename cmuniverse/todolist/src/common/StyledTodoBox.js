import styled from 'styled-components';

const StyledTodoBox = styled.div`
  border: 1px solid #a7a7a7;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  height: 300px;
  overflow-y: auto;
  margin-top: 2rem;
  &::-webkit-scrollbar { width: 5px; }

  h1 {
    text-align: center;
  }
`;

export default StyledTodoBox;