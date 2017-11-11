import T from 'prop-types';
import React from 'react';

import './styles.css';

const PriceTable = ({ list }) => {
  return (
    <table>
      <thead>
      <tr>
        <td>Quý khách có thể chọn lựa một trong cái dịch vụ sau</td>
        <td>Cức dự tính</td>
        <td>Thời gian phát</td>
      </tr>
      </thead>

      <tbody>
      { list.map( (item, index) =>
        <tr>
          <td>item[0]</td>
          <td>item[1]</td>
          <td>item[2]</td>
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