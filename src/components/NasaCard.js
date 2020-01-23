
import React from "react";

const NasaCard = props => {
	return (
        <section>
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
            <img src = {props.image} alt ="Nasa"></img>
            <p>Credit: {props.credit}</p>
		</section>
	);
};

export default NasaCard;