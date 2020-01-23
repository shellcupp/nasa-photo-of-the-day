
import React from "react";


const NasaCard = props => {
	return (
        <section>
        <h1>NASA Photo of the Day!</h1>
        <h3>Date: {props.date}</h3>
            
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
            
		    <img src = {props.image} alt ="Nasa"></img>
            <p>Credit: {props.credit}</p>
		</section>
	);
};

export default NasaCard;