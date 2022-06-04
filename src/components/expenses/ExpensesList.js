// Imports
import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

// Component
const ExpensesList = ({ expenses }) => {

	// Returns
	if (expenses.length === 0){
		return <h2 className="expenses-list__fallback">No expenses found...</h2>;
	}
	return(
		<ul className="expenses-list">
			{
				expenses.map((expense) => {
					const { id, title, amount, date } = expense;
					return <ExpenseItem key={ id } title={ title } amount={ amount } date={ date }/>
				})
			}
		</ul>
	);

};

// Export
export default ExpensesList;