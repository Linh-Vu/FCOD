import React from 'react';

import Menu from './Menu';
import Banner from './Banner';
import Description from './Description/';
import Delivery from './Delivery';
import Price from "./Price";
import Footer from "./Footer";
import Marketing from "./Marketing";
import TopBar from "./TopBar";

import './styles.css';

const HomeView = () => {
  return (
		<div className="main">
			<section id="home">
				<TopBar />
			</section>

			<section >
				<Menu />
			</section>

			<section>
				<Banner />
			</section>

			<section id="service">
				<Description />
			</section>

			<section>
				<Delivery />
			</section>

			<section id="price-table">
				<Price />
			</section>

			<section>
				<Marketing />
			</section>

			<section id="contact">
				<Footer />
			</section>
		</div>
  );
};

export default HomeView;