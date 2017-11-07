import React from 'react';

import './styles.css';

const DescriptionView = () => {
	return (
		<div className="description">
			<div className="description-content">
				<div className="description-content-left" >
					<h1>Giời Thiệu FCOD</h1>
					<hr />
					<p>
						<span>FCOD</span> là dịch vụ chuyển phát nhanh tại Hà Nội và TP. Hồ Chí Minh,<br />
						được thiết kế đặc biệt để phục vụ các Quý shop online trong<br />
						hoạt động giao hàng, thu hộ tiền COD, chi hộ tiền hàng.</p>
					<p>
						<span>FCOD</span> được điều hành bởi công ty Cổ phần dịch vụ HomeDirect <br />
						với nhiều uy tín và tiềm lực, hoạt động trong các lĩnh vực: dịch vụ <br />
						tài chính, thanh toán điện tử, môi giới bất động sản, môi giới bảo hiểm, <br />
						dịch vụ chuyển phát.
					</p>
				</div>
				
				<div className="description-content-right">
					<iframe title="description" src="https://www.youtube.com/embed/5_qsqPOi6kE" alt="description" />
				</div>
			</div>
		</div>
	);
};

export default DescriptionView;