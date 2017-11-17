import T from 'prop-types';
import React from 'react';

import './styles.css';

const PriceTable = ({ list }) => (
  <table className="price-table">
    <thead>
      <tr>
        <th>Quý khách có thể chọn lựa một trong cái dịch vụ sau</th>
        <th>Cức dự tính</th>
        <th>Thời gian phát</th>
      </tr>
    </thead>

    <tbody>
      {list.map((item, index) =>
        <tr key={index}>
          <td className={item.type === 'left' && 'title-left'}>{item.title}</td>
          <td className="content">{item.price}</td>
          <td className="content">{!!item.time && `${item.time} giờ`}</td>
        </tr>
      )}
    </tbody>
  </table>
);

PriceTable.propTypes = {
  list: T.arrayOf(T.shape({})).isRequired,
};

export default PriceTable;