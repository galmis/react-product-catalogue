// @flow

import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

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
    <Col className='product' xs={6} sm={3} key={product.id}>
      <ProductThumbnail product={product} />
    </Col>
  );
}

const _renderProducts = (products: Array<Product>) => {
  const prodsToRender = [];

  // products.forEach(product => {
  //   prodsToRender.push(_renderProduct(product));
  // });
  const len = products.length;
  for (let i=0; i<len; i++) {
    let prod = products[i];
    prodsToRender.push(_renderProduct(prod));
    // if ((i + 1) % 6 === 0) {
    //   prodsToRender.push(_renderClearFix('lg', 'clearfix-lg' + prod.id));
    // }
    // if ((i + 1) % 4 === 0) {
    //   prodsToRender.push(_renderClearFix('md', 'clearfix-md' + prod.id));
    // }
    // if ((i + 1) % 3 === 0) {
    //   prodsToRender.push(_renderClearFix('sm', 'clearfix-sm' + prod.id));
    // }
    // if ((i + 1) % 2 === 0) {
    //   prodsToRender.push(_renderClearFix('xs', 'clearfix-xs' + prod.id));
    // }
  }

  return prodsToRender;
};

const ProductsThumbnails = (props: Object) => {

  return (
    <Row>
      <FlipMove duration={150} staggerDurationBy={25} easing="ease-out">
        { _renderProducts(props.products)}
      </FlipMove>
    </Row>
  );
};

ProductsThumbnails.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductsThumbnails;
