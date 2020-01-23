import React from "react";
import styled from "styled-components"

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const Redh1 = styled.h1`
font-size: 3em;
color: #7F7FFF;
    `;

const Header = props => {
    return(
        <WrapperDiv>
        <Redh1>NASA Photo of the Day !</Redh1>
        <h3>Today's Date: {props.date}</h3>
        </WrapperDiv>
    );
};
export default Header;