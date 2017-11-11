import T from 'prop-types';
import React from 'react';

import './styles.css';

const InputText = ({ label, type }) => {
  return (
    <div className="input-main">
      {!!label && <label>{label}</label>}
      <input type={type} className="input-default" />
    </div>
  )
};

InputText.defaultProps = {
  type: 'text',
};

InputText.propTypes = {
  label: T.string,
  type: T.string,
};

export default InputText;