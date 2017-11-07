import React from 'react';
import T from 'prop-types';

const StepImage = ({ image }) => {
	return (
		<div className="delivery-content-step-image">
			<img src={ image && image } alt="step" />
		</div>
	)
};

StepImage.propTypes = {
	image: T.string,
};

export default StepImage;