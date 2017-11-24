import React from 'react';

import StepImage from './StepImage';
import './styles.css';
import image1 from './icon/create-new-pencil-button.svg';
import image2 from './icon/get-gifts.svg';
import image3 from './icon/sign-out-option.svg';
import image4 from './icon/give-money.svg';

const DeliveryView = () => {
	return (
		<div className="delivery" >
			<div className="delivery-content">
				<h1>Quy Trình Giao Hàng </h1>
				<hr className="delivery-content-hr" />
				<div className="delivery-content-direction">
					<span></span> <span></span> <span></span>
				</div>
				
				<div className="delivery-content-body">
					<div className="delivery-content-step">
						<StepImage image={image1} />
						<h2>1. Tạo Đơn</h2>
						<p>
							Điền form trên web,nhập <br />
							Excel, hoặc gọi điện<br />
							<span>0123-456-789</span>
						</p>
					</div>
					
					<div className="delivery-content-step">
						<StepImage image={image2} />
						<h2>2. Nhận Hàng</h2>
						<p>
							Nhận hàng tại shop<br />
							theo 3 khung giờ<br />
							trong ngày
						</p>
					</div>
					
					<div className="delivery-content-step">
						<StepImage image={image3} />
						<h2>3. Giao Hàng</h2>
						<p>
							Đảm bảo hoàn thành <br />
							trong thời hạn tùy <br />
							thuộc gói cước
						</p>
					</div>
					
					<div className="delivery-content-step">
						<StepImage image={image4} />
						<h2>4. Thanh Toán</h2>
						<p>
							Chuyển khoản trước <br />
							12h ngày kế tiếp <br />
							(nếu có tiền COD)
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeliveryView;