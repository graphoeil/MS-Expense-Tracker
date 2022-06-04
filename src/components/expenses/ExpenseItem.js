// Imports
import React from "react";
import "./ExpenseItem.css";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";

// Component
const ExpenseItem = (props) => {

	// Variables
	const { title, amount, date } = props;

	// Return
	return(
		<li>
			<Card className="expense-item">
				<ExpenseDate date={ date }/>
				<div className="expense-item__description">
					<h2>{ title }</h2>
				</div>
				<div className="expense-item__price">${ amount }</div>
			</Card>
		</li>
	);

};

// Export
export default ExpenseItem;