import React from 'react';

import './styles.css';
import Form from "./Form";

const BannerView = () => {
	return (
		<div className="banner">
			<div className="banner-content">
				<div className="banner-content-left">
					<div className="banner-content-left-content"></div>
				</div>

				<div className="banner-content-right">
					<Form />
				</div>
			</div>
		</div>
	);
};

export default BannerView;