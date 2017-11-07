import React from 'react';
import T from 'prop-types';

import './styles.css';

const SelectBox = ({ options }) => {
  return (
    <select className="default">
      {options.map((item, index) =>
        <option key={index}>{item}</option>
      )}
    </select>
  )
};

SelectBox.propTypes = {
  options: T.array.isRequired,
};

export default SelectBox;