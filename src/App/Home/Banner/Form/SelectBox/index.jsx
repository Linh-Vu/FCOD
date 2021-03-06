import React from 'react';
import T from 'prop-types';

import './styles.css';

const SelectBox = ({options, label}) => {
  return (
    <div className="select-main">
      {!!label && <label>{label}</label>}
      <select className="select-default">
        {options.map((item, index) =>
          <option key={index}>{item}</option>
        )}
      </select>
    </div>
  )
};

SelectBox.propTypes = {
  options: T.array.isRequired,
  label: T.string,
};

export default SelectBox;