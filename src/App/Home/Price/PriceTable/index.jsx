import T from 'prop-types';
import React from 'react';
import './styles.css';

const PriceTable = () => {
  return (
    <div className="price-table-bill">
      <div className="price-title">
        <h1>Biểu phí gửi từ Hà Nội đi các tỉnh</h1>
        <hr/>
      </div>

      <table className="price-table">
        <thead>
          <tr>
            <th></th>
            <th className="price-table-header">Nội Thành</th>
            <th className="price-table-header">Nội Miền</th>
            <th className="price-table-header">Liên Miền</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="row-title" rowSpan="2">Nội thành</td>
            <td rowSpan="2">15.000 đ</td>
            <td>25.00đ / 0.5kg</td>
            <td>25.00đ / 0.5kg</td>
          </tr>
          <tr>
            <td>Nội miền (Đ. Bộ): +5.000 đ / 0.5 kg tiếp theo . (Đ. Bay): +10.000 đ / 0.5 kg tiếp theo</td>
            <td>+10.000 đ / 0.5 kg tiếp theo</td>
          </tr>
          <tr>
            <td className="row-title">Ngoại Thành</td>
            <td>20.000 đ</td>
            <td>30.000 đ</td>
            <td>35.000 đ</td>
          </tr>
          <tr>
            <td className="row-title">Huyện, Xã</td>
            <td>30.000 đ</td>
            <td>40.000 đ</td>
            <td>45.000 đ</td>
          </tr>
          <tr>
            <td className="row-title">Thời gian dự kiến giao hàng</td>
            <td>Giao hàng trong 6h, Sáng lấy chiều giao, Chiều lấy tối giao</td>
            <td>Giao hàng trong 24h, Sáng nay lấy sáng mai giao, chiều nay lấy chiều mai giao</td>
            <td>Giao hàng trong 36h</td>
          </tr>
          <tr>
            <td className="row-title" rowSpan="6">Dịch vụ</td>
            <td colSpan="3">Giao hàng toàn quốc, phủ sóng 63 tỉnh thành</td>
          </tr>
          <tr>
            <td colSpan="3">Miễn phí thu hộ tiền hàng</td>
          </tr>
          <tr>
            <td colSpan="3">Không thu phí nếu đơn hàng phát không thành công (duy nhất tại xegiaonhanh)</td>
          </tr>
          <tr>
            <td colSpan="3">Miễn phí phát lại nhiều lần</td>
          </tr>
          <tr>
            <td colSpan="3">Cập nhật tình trạng đơn hàng hàng ngày cho khách hàng đăng ký dịch vụ</td>
          </tr>
          <tr>
            <td colSpan="3">Chuyển khoản tiền thu hộ thứ 2, 4, 6 hàng tuần</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default PriceTable;