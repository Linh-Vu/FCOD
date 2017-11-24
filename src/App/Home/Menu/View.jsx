import T from 'prop-types';
import React from 'react';

import './styles.css';

import logo from './image/logo.png';

const menu = [
	{ link: '#', title: 'Trang Chủ', id: 'home' },
	{ link: '#', title: 'Dịch Vụ', id: 'service' },
	{ link: '#', title: 'Bảng Giá', id: 'price-table' },
	{ link: '#', title: 'Liên Hệ', id: 'contact' },
];

const MenuView = ({ setNode, goto }) => {
	return (
		<div ref={setNode} className="top-menu">
			<div className="top-menu-left">
        <img src={logo} height={36} alt="logo" />
      </div>
			<div className="top-menu-right">
				<ul className="top-menu-right-content">
          {menu.map((item, index) => (
            <li key={index} className="top-menu-right-content-item">
							<span onClick={() => goto(item.id)} >{item.title}</span>
            </li>
          ))}
				</ul>
			</div>
		</div>
	)
};

MenuView.propTypes = {
	setNode: T.func.isRequired,
	goto: T.func.isRequired,
};

export default MenuView;