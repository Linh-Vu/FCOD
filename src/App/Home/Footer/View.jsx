import React from 'react';

import './styles.css';
import logo from './image/logo.png';
import phone from '../TopBar/icon/phone-call.svg';
import location from '../TopBar/icon/location-pin.svg';
import email from '../TopBar/icon/email.svg';


const FooterView = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <img className="footer-logo" src={logo} alt="logo"/>


        <div className="footer-info">
          <h2>Free Cash On Delivery</h2>
          <hr/>
          <p><img src={location} alt="location"/>19 Tự Cường - P.4 - Q. Tân Bình - TP. Hồ Chí Minh</p>
          <p><img src={email} alt="email"/>linhvu.vv@gmail.com</p>
          <p><img src={phone} alt="phone"/>0909090909</p>
          <div className="footer-info-support">
            <textarea placeholder="..." rows="3" />
            <button type="submit">Liên hệ</button>
          </div>
        </div>
      </div>
      <p className="sub">Copyrights 2017 © fcod@gmail.com</p>
    </div>
  )
};

export default FooterView;