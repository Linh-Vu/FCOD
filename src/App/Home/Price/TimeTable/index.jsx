import React from 'react';
import './styles.css';

const TimeTable = () => {
  return (
    <div className="price-table-time">
      <div className="price-title">
        <h1>Quy định về thời gian giao hàng</h1>
        <hr/>
      </div>
      <table className="price-table">
        <thead>
          <tr>
            <th className="price-table-header" rowSpan="2">Thời Gian Tạo Đơn Hàng</th>
            <th className="price-table-header" rowSpan="2">Thời Gian Lấy Hàng</th>
            <th className="price-table-header" colSpan="3">Thời Gian Giao Hàng, Tính Từ Khi Lấy Hàng</th>
          </tr>
          <tr>
            <th className="price-table-header">Nội Thành<br/>Hà Nội</th>
            <th className="price-table-header">Nội miền</th>
            <th className="price-table-header">Liên Miền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="row-title">Trước 10h</td>
            <td>8h-11h</td>
            <td>6h</td>
            <td>24h</td>
            <td>36 - 48h</td>
          </tr>
          <tr>
            <td className="row-title">Từ 10h-13h</td>
            <td>11h-14h</td>
            <td>6h</td>
            <td>24h</td>
            <td>36 - 48h</td>
          </tr>
          <tr>
            <td className="row-title">Từ 13h-16h</td>
            <td>14h-17h</td>
            <td>6h</td>
            <td>24h</td>
            <td>36 - 48h</td>
          </tr>
          <tr>
            <td className="row-title">Sau 16h</td>
            <td>8h-11h<br/><span className="row-note">(ngày hôm sau)</span></td>
            <td>6h</td>
            <td>24h</td>
            <td>36 - 48h</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default TimeTable;