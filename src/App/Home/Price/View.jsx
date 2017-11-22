import React from 'react';

import PriceTable from './PriceTable';
import './styles.css';

const getList = () => (
  [
    {
      title: 'PTN Phát trong nội tỉnh',
      price: 27500,
      time: 12,
      type: 'left',
    },
    {
      title: 'Miễn phí COD',
      price: '',
      time: '',
      type: 'none',
    },
    {
      title: 'PTN Phí tổng cộng',
      price: 27500,
      time: '',
      type: 'none',
    },
  ]
);

const PriceView = () => {
  const list = getList();
	return (
		<div className="price">
			<PriceTable list={list} />
		</div>
	)
};

export default PriceView;