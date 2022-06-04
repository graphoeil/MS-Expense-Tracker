// Imports
import React from "react";
import './ExpenseDate.css';

// Component
const ExpenseDate = (props) => {

	// Variables
	const { date } = props;

	// Format date
	const month = date.toLocaleString('en-US',{ month:'long' });
	const year = date.getFullYear();
	const day = date.toLocaleString('en-US', { day:'2-digit' });

	// Return
	return(
		<div className="expense-date">
			<div className="expense-date__month">{ month }</div>
			<div className="expense-date__year">{ year }</div>
			<div className="expense-date__day">{ day }</div>
		</div>
	);

};

// Export
export default ExpenseDate;