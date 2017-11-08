import React from 'react';

import './styles.css';
import SelectBox from './SelectBox';
import resource from './resources';

const FormView = () => {
  return (
    <form className="banner-right-form">
      <div className="banner-right-form-header row">
        <label className="col-50">Nơi Nhận</label>
        <label className="col-50">Nơi Đi</label>
      </div>
      <div className="banner-right-form-content row">
        <div className="col-50">
          <div className="content-row">
            <label className="col-25">TP/Tỉnh :</label>
            <select className="col-75">
              <option value="hcm">Hồ Chí Minh</option>
              <option value="hn">Hà Nội</option>
              <option value="dn">Đà Nẵng</option>
            </select>
          </div>
          <div className="content-row">
            <label className="col-25">Quận/Huyện :</label>
            <select className="col-75">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="content-row">
            <label className="col-25">Cân Nặng :</label>
            <input className="col-75" type="number"></input>
          </div>
          <div className="content-row">
            <label className="col-25">Giá trị :</label>
            <input className="col-75" type="number"></input>
          </div>
        </div>
        <div className="col-20"></div>
        <div className="col-30">
          <div className="content-row">
            <select>
              <option value="hcm">Hồ Chí Minh</option>
              <option value="hn">Hà Nội</option>
              <option value="dn">Đà Nẵng</option>
            </select>
          </div>
          <div className="content-row">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="banner-right-form-footer row">
        <button type="submit"> send</button>
      </div>
    </form>
  )
};

export default FormView;