import React from 'react';

// import Language from './Language'; // TODO implement switch language
import facebook from './icon/facebook.svg';
import google from './icon/google.svg';
import twitter from './icon/twitter.svg';
import vimeo from './icon/vimeo.svg';
import location from './icon/location-pin.svg';
import phone from './icon/phone-call.svg';

import './styles.css';

const TopBarView = () => {
	return (
		<div className="top-bar">
			<div className="top-bar-content">
				<div className="top-bar-social">
					<a className="top-bar-twitter-logo" href="">
						<img src={twitter} width={12} height={12} alt="twitter" />
					</a>
					
					<a className="top-bar-facebook-logo" href="">
						<img src={facebook} width={12} height={12} alt="facebook" />
					</a>
					
					<a className="top-bar-google-logo" href="">
						<img src={google} width={12} height={12} alt="google" />
					</a>
					
					<a className="top-bar-vimeo-logo" href="">
						<img src={vimeo} width={12} height={12} alt="vimeo" />
					</a>
				</div>
				
				<div className="top-bar-info">
					<span>
						<img src={phone} width={16} height={16} alt="phone" />
						0909090909
					</span>
					<span>
						<img src={location} width={16} height={16} alt="location" />
						Ho Noi
					</span>
					
					<button className="top-bar-button">
						Sign In
					</button>
				</div>
			</div>
		</div>
	);
};

export default TopBarView;