// @flow

import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import { Row, Col } from 'react-bootstrap';

import ProductThumbnail from './ProductThumbnail';

import type { Product } from '../../types';

const ProductsThumbnails = (props: Object) => {



  const _renderProduct = (product: Product) => {

    return (
      <Col className='product' xs={6} md={3} key={product.id}>
        <ProductThumbnail product={product} />
      </Col>
    );
  }

  const _renderProducts = (products: Array<Product>) => {

    const prodsToRender = [];

    products.forEach(product => {
      prodsToRender.push(_renderProduct(product));
    });

    return prodsToRender;
  };

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
