import React from 'react';

import SelectBox from './SelectBox';
import InputText from './InputText';
import resource from './resources';
import './styles.css';

const FormView = () => {
  return (
    <form className="banner-right-form">
      <div className="banner-right-form-header">
        <h4>Nơi đi</h4>
        <h4>Nơi đến</h4>
      </div>

      <div className="banner-right-form-content">
        <div className="banner-right-form-content-row">
          <div className="banner-right-from">
            <SelectBox options={[]} label={'Tỉnh / TP *:'}/>
            <SelectBox options={[]} label={'Quận / Huyện *:'}/>
          </div>

          <div className="banner-right-form-direction">
            <div className="direction" />
            <div className="direction" />
          </div>

          <div>
            <SelectBox options={[]}/>
            <SelectBox options={[]}/>
          </div>
        </div>

        <div className="banner-right-form-content-row">
          <div className="banner-right-form-input-value">
            <InputText label="Cân nặng *:" />
            <InputText label="Giá trị *:" />
          </div>
        </div>
      </div>

      <div className="banner-right-form-footer">
        <button type="submit">send</button>
      </div>
    </form>
  )
};

export default FormView;