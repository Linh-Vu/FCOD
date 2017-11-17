import T from 'prop-types';
import React from 'react';

import './styles.css';

import logo from './image/logo.png';

const menu = [
	{ link: '#', title: 'Trang Chủ', position: 0 },
	{ link: '#', title: 'Dịch Vụ', position: 675 },
	{ link: '#', title: 'Bảng Giá', position: 1040 },
	{ link: '#', title: 'Liên Hệ', position: 3235 },
];

const MenuView = ({ setNode, goto }) => {
	return (
		<div ref={setNode} className="top-menu">
			<div className="top-menu-left">
        <img src={logo} height={48} alt="logo" />
      </div>
			<div className="top-menu-right">
				<ul className="top-menu-right-content">
          {menu.map((item, index) => (
            <li key={index} className="top-menu-right-content-item">
							<span onClick={() => goto(item.position)} >{item.title}</span>
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