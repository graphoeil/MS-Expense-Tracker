// Imports
import React, { useState } from "react";
import NewExpense from "./components/newExpense/NewExpense";
import Expenses from "./components/expenses/Expenses";

// Component
const App = () => {

	// Initial data
	const INITIAL_EXPENSES = [
		{ id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
		{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
		{ id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
		{ id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12), }
	  ];

	// State
	const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

	// Add new expense
	const addExpenseHandler = (expense) => {
		setExpenses((oldExpenses) => {
			return [expense, ...oldExpenses];
		});
	};

	// Return
	return(
		<div>
			<NewExpense onAddExpense={ addExpenseHandler }/>
			<Expenses items={ expenses }/>
		</div>
	);

};

// Export
export default App;