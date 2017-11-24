import React from 'react';

import './styles.css';
import logo from './image/logo.png';

const FooterView = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <img className="footer-logo" src={logo} alt="logo"/>


        <div className="footer-info">
          <h2>Free Cash On Delivery</h2>
          <hr/>
          <h4>19 Tự Cường - P.4 - Q. Tân Bình - TP. Hồ Chí Minh</h4>
          <p>linhvu.vv@gmail.com</p>
          <p>0909090909</p>
        </div>
      </div>
      <p className="sub">Copyrights 2017 © fcod@gmail.com</p>
    </div>
  )
};

export default FooterView;