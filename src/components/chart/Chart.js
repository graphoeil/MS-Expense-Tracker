// Imports
import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

// Component
const Chart = (props) => {

	// Variables
	const { dataPoints } = props;

	// Max value
	const dataPointValues = dataPoints.map((dataPoint) => {
		return dataPoint.value;
	});
	const totalMaximum = Math.max(...dataPointValues);

	// Return
	return(
		<div className="chart">
			{
				dataPoints.map((dataPoint) => {
					const { value, label } = dataPoint;
					return <ChartBar key={ label } value={ value } maxValue={ totalMaximum } label={ label }/>
				})
			}
		</div>
	);

};

// Export
export default Chart;