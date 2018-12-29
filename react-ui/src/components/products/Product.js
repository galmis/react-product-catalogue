// @flow

import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";

import {
  PageHeader,
  Media,
  Image,
  Grid,
  Row,
  Col,
  Button
} from 'react-bootstrap';

import FancyHeader from '../shared/FancyHeader';
import Pager from './Pager';

const Product = (props : Object) => {

  const { title, articleFile, imgFile, thumbText } = props.product;
  const href = `/produktai/${props.nextSlug}/${props.nextId}`;

  // TODO: replace hard coded path to path from redux store
  // NOTE: import/export doesn't work with dynamic paths
  const ProductArticle = require('./articles/' + articleFile);
  const productImg = require('./images/' + imgFile);

  return (
    <div>
      <Helmet>
        <title>{title + ' | bukitesveiki.lt'}</title>
        thumbText && <meta name='description' content={`${title} - ${thumbText}`} />
        <meta name='keywords' content={`bukitesveiki.lt,${title}`} />
      </Helmet>
      <FancyHeader title={title} subtitle={thumbText}/>

      <Grid>
        <section id="blog" className='animated fadeIn'>
          <Row>
            <Col sm={2} smOffset={0} xsOffset={3} xs={6}>
              <Image rounded responsive src={productImg} alt={title} />
              <div className='space-50'></div>
            </Col>
            <Col sm={10} smOffset={0} xsOffset={0} xs={12}>
              <div className="post-content-area">
                <ProductArticle />
              </div>
            </Col>
          </Row>

          <Row className="pagination">
            <Col xs={12}>
              <Pager nextId={props.nextId} nextHref={href} dispatch={props.dispatch} historyStack={props.historyStack} />
             </Col>
          </Row>

        </section>

      </Grid>

    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  nextId: PropTypes.string.isRequired
};

export default Product;
