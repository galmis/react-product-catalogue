// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { Thumbnail } from 'react-bootstrap';

export default class ProductThumbnail extends Component {

  render() {
    const { id, title, thumbText, imgFile } = this.props.product;
    const href = `produktai/${id}`;

    return (
      <Link to={href}>
        <Thumbnail src={require('./images/' + imgFile)}>
          <div className="caption">
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
