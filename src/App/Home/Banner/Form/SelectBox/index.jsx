import React from 'react';
import T from 'prop-types';

import './styles.css';

const SelectBox = ({options, label}) => {
  return (
    <div className="row">
      {label ?
        <div className="row">
          <label className="col-40">{label}</label>
          <select className="col-60">
            {options.map((item, index) =>
              <option key={index}>{item}</option>
            )}
          </select>
        </div>
        :
        <select className="col-100">
          {options.map((item, index) =>
            <option key={index}>{item}</option>
          )}
        </select>
      }

    </div>
  )
};

SelectBox.propTypes = {
  options: T.array.isRequired,
  label: T.string.isRequired,
};

export default SelectBox;