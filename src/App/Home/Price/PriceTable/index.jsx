import T from 'prop-types';
import React from 'react';

import './styles.css';

const PriceTable = ({ list }) => {
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
      { list.map( (item, index) =>
        <tr>
          <td className="price-table-title">item[0]</td>
          <td className="price-table-money">item[1]</td>
          <td className="price-table-time">item[2]</td>
        </tr>
      )}
      {/*example */}
      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
      </tr>
      <tr>
        <td>North/South</td>
        <td>Simon Crowther</td>
        <td>UK</td>
      </tr>
      <tr>
        <td>Paris spécialités</td>
        <td>Marie Bertrand</td>
        <td>France</td>
      </tr>
      </tbody>
    </table>
  )
};

PriceTable.propTypes = {
  list: T.arrayOf(T.shape({})).isRequired,
};

export default PriceTable;