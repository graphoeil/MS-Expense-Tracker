// Imports
import React, { useState } from "react";
import './Expenses.css';
import Card from "../ui/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

// Component
const Expenses = ({ items }) => {

	// State
	const [filteredYear, setFilteredYear] = useState('2022');

	// Change year
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	// Filter expenses
	const filteredExpenses = items.filter((item) => {
		return item.date.getFullYear() === Number(filteredYear);
	});

	// Return
	return(
		<Card className="expenses">
			<ExpensesFilter selectedYear={ filteredYear } onFilterChange={ filterChangeHandler }/>
			<ExpensesChart expenses={ filteredExpenses }/>
			<ExpensesList expenses={ filteredExpenses }/>
		</Card>
	)

};

// Export
export default Expenses;