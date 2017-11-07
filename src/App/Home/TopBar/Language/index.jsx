import React from 'react';

import View from './View';

const languages = [
	'vie', 'eng'
];

class Language extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			language: languages[1],
		};
		
		this.changeLanguage = this.changeLanguage.bind(this);
	}
	
	changeLanguage(value) {
		this.setState({ language: value });
	}
	
	render() {
		return (
			<View
				language={this.state.language}  list={languages}
				changeLanguage={this.changeLanguage}
			/>
		)
	}
}

export default Language;