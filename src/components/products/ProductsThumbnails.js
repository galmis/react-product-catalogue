// @flow

import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import { Row, Col } from 'react-bootstrap';

import ProductThumbnail2 from './ProductThumbnail2';

import type { Product } from '../../types';

const ProductsThumbnails = (props: Object) => {

  debugger;

  const _renderProduct = (product: Product) => {
    debugger;
    return (
      <Col className='product' xs={6} md={3} key={product.id}>
        <ProductThumbnail2 product={product} />
      </Col>
    );
  }

  const _renderProducts = (products: Array<Product>) => {
    debugger;
    const prodsToRender = [];

    products.forEach(product => {
      prodsToRender.push(_renderProduct(product));
    });

    return prodsToRender;
  };

  return (
    <Row>
      <FlipMove duration={300} staggerDurationBy={50} easing="ease-out">
        { _renderProducts(props.products)}
      </FlipMove>
    </Row>
  );
};

ProductsThumbnails.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductsThumbnails;
