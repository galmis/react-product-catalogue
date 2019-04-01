// @flow

import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import LazyLoad from 'react-lazyload';

import { Row, Col } from 'react-bootstrap';

import './ProductsThumbnails.css';
import ProductThumbnail from './ProductThumbnail';

import type { Product } from '../../types';

// NOTE: problems with filter!
const _renderClearFix = (size: string, key: string) => {
  return (
    <div  className={"clearfix visible-" + size}></div>
  )
};

const _renderProduct = (product: Product) => {
  return (
    <Col key={product.id+'thumbnail'} className='product' xs={6} sm={3}>
      <ProductThumbnail product={product} />
    </Col>
  );
}

const _renderProducts = (products: Array<Product>) => {

  const prodsToRender = [];

  const len = products.length;
  for (let i=0; i<len; i++) {
    let prod = products[i];
    prodsToRender.push(_renderProduct(prod));
  }

  return prodsToRender;
};

const ProductsThumbnails = (props: Object) => {

  return (
    <Row>
      <FlipMove duration={150} staggerDurationBy={15} staggerDelayBy={15} easing="ease-out">
        { _renderProducts(props.products)}
      </FlipMove>
    </Row>
  );
};

ProductsThumbnails.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductsThumbnails;
