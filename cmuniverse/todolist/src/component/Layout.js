import React from 'react';
import styled from 'styled-components';


const Layout = ({ children }) => {
  return (
    <StyledLayout>
      { children }
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  width: 750px;
  height: 500px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-color: white;
  box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.025);
`;


export default Layout;