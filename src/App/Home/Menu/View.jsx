import React from 'react';

import './styles.css';

import logo from './image/logo.png';

const menu = [
	{ link: '#', title: 'Trang Chủ' },
	{ link: '#', title: 'Dịch Vụ' },
	{ link: '#', title: 'Bảng Giá' },
	{ link: '#', title: 'Liên Hệ' },
];

const MenuView = () => {
	return (
		<div className="top-menu">
			<div className="top-menu-left">
        <img src={logo} height={48} alt="logo" />
      </div>
			<div className="top-menu-right">
				<ul className="top-menu-right-content">
          {menu.map((item, index) => (
            <li key={index} className="top-menu-right-content-item">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
				</ul>
			</div>
		</div>
	)
};

export default MenuView;