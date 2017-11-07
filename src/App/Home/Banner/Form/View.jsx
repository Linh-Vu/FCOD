import React from 'react';

import './styles.css';
import SelectBox from './SelectBox';
import resource from './resources';

const FormView = () => {
  return (
    <form className="banner-right-form">
      <div>
        <SelectBox options={[]} />
        <SelectBox options={[]} />
      </div>

      <hr/><hr/>

      <div>
        <SelectBox options={[]} />
        <SelectBox options={[]} />
      </div>

      <button type="button" onClick={resource.getFee}>View</button>
    </form>
  )
};

export default FormView;