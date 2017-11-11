import React from 'react';

import PriceTable from './PriceTable';
import './styles.css';

const PriceView = () => {
	return (
		<div className="price">
			<PriceTable list={[]} />
		</div>
	)
};

export default PriceView;