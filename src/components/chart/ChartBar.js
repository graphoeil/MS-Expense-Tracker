// Imports
import React from "react";
import './ChartBar.css';

// Component
const ChartBar = ({ value, maxValue, label }) => {

	// Bar height
	let barFillHeight = '0%';
	if (maxValue > 0){
		// Règle de 3 ,-)
		barFillHeight = Math.round((value  * 100) / maxValue) + '%';
	}

	// Return
	return(
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div className="chart-bar__fill" style={ { height:barFillHeight } }></div>
			</div>
			<div className="chart-bar__label">{ label }</div>
		</div>
	);

};

// Export
export default ChartBar;