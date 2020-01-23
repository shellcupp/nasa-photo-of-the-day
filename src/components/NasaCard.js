import React from "react";
import styled from "styled-components"

const WrapperSection = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const NasaCard = props => {
	return (
        <WrapperSection>
            <h2>{props.title}</h2>
           <img src = {props.image} alt ="Nasa"></img>
            <p>{props.Explanation}</p>
            <p>Credit: {props.credit}</p>
		</WrapperSection>
	);
};

export default NasaCard;