// @flow

import React from 'react';

import './Spinner.css';

type Props = {
  isTransparent: ?boolean
};

const Spinner = (props: Props) => {

  const {isTransparent} = props;

  return (
    <div className='spinner-container' style={isTransparent ? { position: 'relative' } : { position: 'fixed' }}>
      <div className="spinner spinner-round"></div>
    </div>
  );
};

export default Spinner;
