
import React from "react";


const NasaCard = props => {
	return (
        <section>
        <h1>NASA Photo of the Day!</h1>
        <h2>{props.title}</h2>
        <p>date: {props.date}</p>
        <p>description: {props.explanation}</p>
        <p>credit: {props.credit}</p>
		<img src="{props.img}" alt="Nasa"/>
            
		</section>
	);
};

export default NasaCard;