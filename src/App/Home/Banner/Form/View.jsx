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
        <div className="start col-50">
          <div className="content-row">
            <label className="col-40">TP/Tỉnh :</label>
            <select className="col-60">
              <option value="hcm">Hồ Chí Minh</option>
              <option value="hn">Hà Nội</option>
              <option value="dn">Đà Nẵng</option>
            </select>
          </div>
          <div className="content-row">
            <label className="col-40">Quận/Huyện :</label>
            <select className="col-60">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="content-row">
            <label className="col-40">Cân Nặng :</label>
            <input className="col-60" placeholder="cân nặng món hàng..."type="number"></input>
          </div>
          <div className="content-row">
            <label className="col-40">Giá trị :</label>
            <input className="col-60" placeholder="giá trị của món hàng..." type="number"></input>
          </div>
        </div>
        <div className="direction col-20"></div>
        <div className="end col-30">
          <div className="content-row">
            <select className="col-100">
              <option value="hcm">Hồ Chí Minh</option>
              <option value="hn">Hà Nội</option>
              <option value="dn">Đà Nẵng</option>
            </select>
          </div>
          <div className="content-row">
            <select className="col-100">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
      <div className="banner-right-form-footer row">
        <button className="col-30" type="submit"> send</button>
      </div>
    </form>
  )
};

export default FormView;