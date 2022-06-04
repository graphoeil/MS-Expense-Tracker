// Imports
import React from "react";
import "./Card.css";

// Component
const Card = ({ children, className }) => {

	// Classes passed as props
	const classes = `card ${ className }`;

	// Return
	return(
		<div className={ classes }>
			{ children }
		</div>
	);

};

// Export
export default Card;