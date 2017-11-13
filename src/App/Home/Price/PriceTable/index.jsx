import T from 'prop-types';
import React from 'react';

import './styles.css';

const PriceTable = ({list}) => {
  return (
    <table className="price-table">
      <thead>
      <tr>
        <th>Quý khách có thể chọn lựa một trong cái dịch vụ sau</th>
        <th>Cức dự tính</th>
        <th>Thời gian phát</th>
      </tr>
      </thead>

      <tbody>
      {/*example */}
      {list.map((item, index) =>
        <tr>
          <td className="title-left">Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
      )}
      </tbody>
    </table>
  )
};

PriceTable.propTypes = {
  list: T.arrayOf(T.shape({})).isRequired,
};

export default PriceTable;