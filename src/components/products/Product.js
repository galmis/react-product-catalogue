// @flow

import React, {Component} from 'react';

import PropTypes from 'prop-types';

import {
  PageHeader,
  Media,
  Image,
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import {goBack, push} from 'react-router-redux';

import FancyHeader from './FancyHeader';
import Pager from './Pager';

const Product = (props : Object) => {

  const { title, articleFile, imgFile, thumbText } = props.product;
  const href = `/produktai/${props.nextId}`;

  // TODO: replace hard coded path to path from redux store
  // NOTE: import/export doesn't work with dynamic paths
  const ProductArticle = require('./articles/' + articleFile);
  const productImg = require('./images/' + imgFile);

  debugger;
  return (
    <div>
      <FancyHeader title={title} subtitle={thumbText}/>

      <div className="container">
        <section id="blog">
          <Row>
            <Col sm={2} smOffset={0} xsOffset={3} xs={6}>
              <Image rounded responsive src={productImg} alt={title} />
              <div className='space-50'></div>
            </Col>
            <Col sm={9} smOffset={1} xsOffset={0} xs={12}>
              <div className="post-content-area">
                <ProductArticle />
              </div>
            </Col>
          </Row>

          <Row className="pagination">
            <Col xs={12}>
              <Pager nextId={props.nextId} href={href} dispatch={props.dispatch} />
             </Col>
          </Row>

        </section>

      </div>

    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  nextId: PropTypes.string.isRequired
};

export default Product;
