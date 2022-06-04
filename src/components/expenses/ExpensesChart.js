// Imports
import React from "react";
import Chart from "../chart/Chart";

// Component
const ExpensesChart = ({ expenses }) => {

	// Data points
	const chartDataPoints = [
		{ label:'Jan', value:0 },
		{ label:'Feb', value:0 },
		{ label:'Mar', value:0 },
		{ label:'Apr', value:0 },
		{ label:'May', value:0 },
		{ label:'Jun', value:0 },
		{ label:'Jul', value:0 },
		{ label:'Aug', value:0 },
		{ label:'Sep', value:0 },
		{ label:'Oct', value:0 },
		{ label:'Nov', value:0 },
		{ label:'Dec', value:0 }
	];

	// Set value in data points
	for (const expense of expenses){
		const expenseMonth = expense.date.getMonth();
		chartDataPoints[expenseMonth].value += expense.amount;
	}

	// Return
	return <Chart dataPoints={ chartDataPoints }/>

};

// Export
export default ExpensesChart;