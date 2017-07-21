// @flow

import React from 'react';

import './Spinner.css';

type Props = {

};

const Spinner = (props: Props) => {

  return (
    <div id='preloader' className='spinner-container'>
      <div className="spinner spinner-round"></div>
    </div>
  );
};

export default Spinner;
