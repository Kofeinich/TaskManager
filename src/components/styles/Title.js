import React from 'react';
import styled from "styled-components";

const StyledTitle = styled.h1`
  margin: 32px 0;
  color: #fff;
  font-size: 24px;
`


const Title = ({children}) => {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    );
};

export default Title;