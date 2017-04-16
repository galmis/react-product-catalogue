// @flow

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { Thumbnail } from 'react-bootstrap';

export default class ProductThumbnail extends Component {

  render() {
    const { id, title, thumbText } = this.props.product;
    const href = `produktai/${id}`;

    return (
      <Link to={href}>
        <Thumbnail src="http://placehold.it/320x150">
          <div className="caption">
            <h4 className="pull-right">$24.99</h4>
            <h4>{ title }</h4>
            <p>
              { thumbText }
            </p>
          </div>
        </Thumbnail>
      </Link>
    );
  }

}

ProductThumbnail.propTypes = {
  product: PropTypes.object.isRequired
};
