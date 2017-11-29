import React from 'react';

import PriceTable from './PriceTable';
import TimeTable from './TimeTable';
import './styles.css';

const PriceView = () => {
	return (
		<div className="price">
			<PriceTable />
      <TimeTable />
      <div className="price-table-note">
        <h4>Lưu Ý:</h4>
        <ul>
          <li>- Nội thành phục vụ cả sáng Chủ Nhật</li>
          <li>- Ngoại thành , Huyện + 6h, Tuyến xã + 12h</li>
        </ul>
      </div>
		</div>
	)
};

export default PriceView;