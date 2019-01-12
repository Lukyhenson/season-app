import './SeasonDisplay.scss';

import React from 'react';

const seasonConfig = {
	winter: {
		text: "Burr it's chilly",
		icon: "snowflake"
	},
	summer: {
		text: "Let's hit the beach",
		icon: "sun"
	}
}

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter'
	} else {
		return lat < 0  ? 'winter' : 'summer';
	}
};

const SeasonDisplay = props => {
	const { latitude } = props;
	const season = getSeason(latitude, new Date().getMonth());
	const { text, icon } = seasonConfig[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${icon} icon`} />
			<h1 className={`text-${season}`}>{text}</h1>
			<i className={`icon-right massive ${icon} icon`} />
		</div>
	)
};

export default SeasonDisplay;
