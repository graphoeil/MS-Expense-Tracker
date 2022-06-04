// Imports
import React from 'react';
import './ExpensesFilter.css';

// Component
const ExpensesFilter = ({ selectedYear, onFilterChange }) => {

	// Select changes
	const dropdownChangeHandler = (e) => {
		onFilterChange(e.target.value);
	};

	// Return
	return(
		<div className='expenses-filter'>
		<div className='expenses-filter__control'>
			<label>Filter by year</label>
			<select value={ selectedYear } onChange={ dropdownChangeHandler }>
				<option value='2023'>2023</option>
				<option value='2022'>2022</option>
				<option value='2021'>2021</option>
				<option value='2020'>2020</option>
				<option value='2019'>2019</option>
			</select>
		</div>
		</div>
	);
};

// Export
export default ExpensesFilter;