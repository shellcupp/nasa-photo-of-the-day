
import React from "react";


const NasaCard = props => {
	return (
        <section>
        <h1>NASA Photo of the Day!</h1>
			<img src={props.image} alt="Nasa"/>
            <data
                title={props.title}
                date={props.date}
                description={props.explanation}
                credit={props.credit}
            />
		</section>
	);
};

export default NasaCard;