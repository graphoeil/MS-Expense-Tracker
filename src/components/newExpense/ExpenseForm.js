// Imports
import React, { useState } from "react";
import './ExpenseForm.css';

// Component
const ExpenseForm = (props) => {

	// Variables
	const { onCancel, onSaveExpenseData } = props;

	// States
	const [formData, setFormData] = useState({
		title:'',
		amount:'',
		date:''
	});

	// Inputs change
	const changeHandler = (e) => {
		// Here we have the guarantee that we did update the latest state snapshot
		// with setFormatData({ ...previousState, [e.target.name]:e.target.value });
		// in case of multiple setState it's not and may cause bugs !!!!
		setFormData((previousState) => {
			return {
				...previousState,
				[e.target.name]:e.target.value
			};
		});
	};
	

	// Submit form
	const submitHandler = (e) => {
		e.preventDefault();
		const expenseData = {
			title:formData.title,
			amount:Number(formData.amount),
			date:new Date(formData.date)
		};
		// Send to NewExpense
		onSaveExpenseData(expenseData);
		// Reset form
		setFormData({
			title:'',
			amount:'',
			date:''
		});
	};

	// Return
	return(
		<form onSubmit={ submitHandler }>

			{/* Controls */}
			<div className="new-expense__controls">

				{/* Title */}
				<div className="new-expense__control">
					<label htmlFor="title">Title</label>
					<input id="title" type="text" name="title" 
						onChange={ changeHandler } value={ formData.title }/>
				</div>
				{/* Title */}

				{/* Amount */}
				<div className="new-expense__control">
					<label htmlFor="amout">Amount</label>
					<input id="amount" type="number" min="1" step="1" name="amount" 
						onChange={ changeHandler } value={ formData.amount }/>
				</div>
				{/* Amount */}

				{/* Date */}
				<div className="new-expense__control">
					<label htmlFor="date">Date</label>
					<input id="date" type="date" min="2019-01-01" max="2023-12-31" name="date" 
						onChange={ changeHandler } value={ formData.date }/>
				</div>
				{/* Date */}

			</div>
			{/* Controls */}

			{/* Submit btn */}
			<div className="new-expense__actions">
			<button type="button" onClick={ onCancel }>
					Cancel
				</button>
				<button type="submit">
					Add expense
				</button>
			</div>
			{/* Submit btn */}
			
		</form>
	);

};

// Export
export default ExpenseForm;