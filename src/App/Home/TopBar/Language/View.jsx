import React from 'react';
import T from 'prop-types';

import down from '../icon/down.svg';
import './styles.css';

const LanguageView = ({ language, list, changeLanguage }) => {
	return (
		<div className="dropdown-lang">
			<button>
				<span>{language}</span>
				<img src={down} width={10} height={10} alt="down" />
			</button>
			<ul className="dropdown-lang-content">
				{
					list.map(
						item => (
							<div key={item} className="dropdown-lang-lang-item">
								<li onClick={() => changeLanguage(item)}>{item}</li>
								<hr/>
							</div>
						)
					)
				}
			</ul>
		</div>
	)
};

LanguageView.propTypes = {
	list: T.array.isRequired,
	language: T.string.isRequired,
	changeLanguage: T.func.isRequired,
};

export default LanguageView;