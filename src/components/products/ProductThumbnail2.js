// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router';


import TestImg from '../../styles/inCart/images/f-product.jpg';

const ProductThumbnail2 = (props: Object) => {

  debugger;
  const { id, title, thumbText, imgFile } = props.product;
  const href = `produktai/${id}`;

  return (
    <div>
      <Link to={href} className="product-link" />
      <Image src={TestImg} alt={title} />
      <div className="product-details">
        <h3 className="product-title">{ title }</h3>
      </div>
    </div>
  );
};

ProductThumbnail2.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductThumbnail2;
