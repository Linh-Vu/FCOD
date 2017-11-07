import React from 'react';

import './styles.css';

const MarketingView = () => {
	return (
		<div className="marketing">
			<div className="marketing-content-bg" />
			
			<div className="marketing-content">
				<h1>LỢI ÍCH CỦA FCOD</h1>
				<hr />
				<div className="marketing-content-body">
					<div className="marketing-content-left">
						<h4>Tiết kiệm chi phí</h4>
						<ul>
							<li><p>Miễn phí nhận hàng tại shop</p></li>
							<li><p>Miễn phí giao lại tới 3 lần</p></li>
							<li><p>Miễn phí thu hộ COD & chuyển khoản</p></li>
							<li><p>Miễn phí trả hàng</p></li>
							<li><p>Chiết khẩu cao khi nhiều đơn</p></li>
						</ul>
					</div>
					
					<div className="marketing-content-right">
						<h4>Tùy chọn tốc độ giao hàng</h4>
						<ul>
							<li><p>Tùy chọn tốc độ giao hàng</p></li>
							<li><p>Thay đổi địa điểm, người nhận, số tiền</p></li>
							<li><p>Hẹn giờ giao hàng theo yêu cầu</p></li>
							<li><p>Nhận/giao hàng tại nhà/bến xe</p></li>
							<li><p>Thu/chi tiền theo yêu cầu</p></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
};

export default MarketingView;