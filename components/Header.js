// Import React
import React from 'react';

// Functions
import { animate }  from '../app';

export class Header extends React.Component {
	render() {
		return (
			<header id="header">
				<h1 className="headline">Mark Malta</h1>
				<h2>Front-end Engineer</h2>
			</header>
		);
	}
};