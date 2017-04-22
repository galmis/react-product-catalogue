// @flow

import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col } from 'react-bootstrap';

import ProductThumbnail2 from './ProductThumbnail2';

import type { Product } from '../../types';

const ProductsThumbnails = (props: Object) => {

  debugger;

  const _renderProduct = (product: Product) => {
    debugger;
    return (
      <Col className='product shuffle-item filtered' xs={6} md={3} key={product.id}>
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
      { _renderProducts(props.products)}
    </Row>
  );
};

ProductsThumbnails.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductsThumbnails;


// <div id="grid" className="row shuffle" style={{position: 'relative', overflow: 'hidden', height: '1052.97px', transition: 'height 250ms ease-out'}}>
//   {/* product */}
//   <div className="col-xs-6 col-md-3 product shuffle-item filtered" data-groups="[&quot;womens&quot;, &quot;shirt&quot;]" style={{position: 'absolute', top: 0, left: 0, visibility: 'visible', transition: 'transform 250ms ease-out, opacity 250ms ease-out', opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1)'}}>
//     <ProductThumbnail2 />
//   </div>{/* / product */}
//   {/* product */}
//   <div className="col-xs-6 col-md-3 product shuffle-item filtered" data-groups="[&quot;womens&quot;, &quot;shirt&quot;]" style={{position: 'absolute', top: 0, left: 0, visibility: 'visible', opacity: 1, transform: 'translate3d(293px, 0px, 0px) scale3d(1, 1, 1)', transition: 'transform 250ms ease-out, opacity 250ms ease-out'}}>
//     <ProductThumbnail2 />
//   </div>{/* / product */}
//
// </div>
