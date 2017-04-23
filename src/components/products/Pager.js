// @flow

import React from 'react';
import { Button } from 'react-bootstrap';
import {goBack, push} from 'react-router-redux';

const Pager = (props: Object) => {

  const _onPrevClick = () => {
    props.dispatch(goBack());
  };

  const _onNextClick = () => {
    debugger;
    props.dispatch(push(props.href));
  };

  return(
    <div>
      <Button className="btn btn-default btn-rounded no-margin" onClick={_onPrevClick}>
        <i className="fa fa-long-arrow-left"></i><span>Atgal</span>
      </Button>
       <Button className="btn btn-default btn-rounded no-margin pull-right"
         disabled={!props.nextId} onClick={_onNextClick}>
         <span>Sekantis</span><i className="fa fa-long-arrow-right"></i>
       </Button>
    </div>
  );
};

export default Pager;
