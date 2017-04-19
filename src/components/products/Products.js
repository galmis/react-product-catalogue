// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-bootstrap';

import ProductThumbnail from './ProductThumbnail';
import type { Product } from '../../types';

export default class Products extends Component {

  render() {

    // NOTE: might want to have several rows...
    return (
      <section>
        <Row>
           {this._renderProducts(this.props.products)}
        </Row>
      </section>
    );
  }

  _renderProduct(product: Product) {
    return (
      <Col xs={12} sm={6} md={4} key={product.id}>
        <ProductThumbnail product={product} />
      </Col>
    );
  }

  _renderProducts(products: Array<Product>) {

    const prodsToRender = [];

    products.forEach(product => {
      prodsToRender.push(this._renderProduct(product));
    });

    return prodsToRender;
  }

}

Products.propTypes = {
  products: PropTypes.array.isRequired
};
