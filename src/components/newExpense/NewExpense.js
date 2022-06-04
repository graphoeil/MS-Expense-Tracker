// Imports
import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

// Component
const NewExpense = ({ onAddExpense }) => {

	// Is editing ?
	const [isEditing, setIsEditing] = useState(false);

	// Send data to App
	const saveExpenseDataHandler = (expense) => {
		const expenseData = { ...expense, id:Math.random().toString() };
		onAddExpense(expenseData);
		setIsEditing(false);
	};

	// Editing handler
	const startEditingHandler = () => {
		setIsEditing(true);
	};
	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	// Return
	return(
		<div className="new-expense">
			{
				!isEditing ? <button type="button" onClick={ startEditingHandler }>
					Add new expense
				</button> : <ExpenseForm onCancel={ stopEditingHandler } onSaveExpenseData={ saveExpenseDataHandler }/>
			}
		</div>
	);

};

// Export
export default NewExpense;