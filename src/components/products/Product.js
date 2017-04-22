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

import ProductHeader from './ProductHeader';

const Product = (props : Object) => {

  const { title, articleFile, imgFile } = props.product;
  const href = `/produktai/${props.nextId}`;

  // TODO: replace hard coded path to path from redux store
  // NOTE: import/export doesn't work with dynamic paths
  const ProductArticle = require('./articles/' + articleFile);
  const productImg = require('./images/' + imgFile);

  const _onPrevClick = () => {
    props.dispatch(goBack());
  };

  const _onNextClick = () => {
    debugger;
    props.dispatch(push(href));
  };

  debugger;
  return (
    <div>
      <ProductHeader product={props.product}/>

        <div className="container">
          {/* blog content + sidebar */}
          <section id="blog">
            <Row>
              <Col sm={2} xs={4}>
                <Image thumbnail responsive src={productImg} alt={title} />
              </Col>
              <Col smOffset={1} sm={9} xs={8}>
                <div className="post-content-area">
                  <ProductArticle />
                </div>
              </Col>
            </Row>

            <div className="pagination">
              <Button className="btn btn-default btn-rounded no-margin" onClick={_onPrevClick}>
                <i className="fa fa-long-arrow-left"></i><span>Atgal</span>
              </Button>
               <Button className="btn btn-default btn-rounded no-margin pull-right"
                 disabled={!props.nextId} onClick={_onNextClick}>
                 <span>Sekantis</span><i className="fa fa-long-arrow-right"></i>
               </Button>
            </div>

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
