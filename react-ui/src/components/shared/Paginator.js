// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Pagination, Button } from 'react-bootstrap';

const Paginator = (props: Object) => {

  if (props.totalPages && props.totalPages > 1) {

    const _onClick = (selectedPage: number) => {
      if (selectedPage !== props.activePage) {
        props.onSelect(selectedPage);
      }
    };

    const _getBtnComp = (evt) => {
      const klazz = props.activePage === evt.children ? 'btn-rounded btn-active' : 'btn-rounded';

      return (
        <Button onClick={_onClick.bind(this, evt.children)} className={klazz}>{evt.children}</Button>
      )
    }

    return (
      <Pagination
        items={props.totalPages}
        onSelect={props.onSelect}
        buttonComponentClass={_getBtnComp}/>
    );

  }

  return (
    <div> </div>
  );
};

Paginator.propTypes = {
  totalPages: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default Paginator;
