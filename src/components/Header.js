import React from "react";

const Header = props => {
    return(
        <div>
        <h1>NASA Photo of the Day!</h1>
        <h3>Date: {props.date}</h3>
        </div>
    );
};
export default Header;