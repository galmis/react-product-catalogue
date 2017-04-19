// @flow

import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { PageHeader, Media, Image, Grid, Row, Col } from 'react-bootstrap';

//import { sanitize } from 'dompurify';

const Product = (props: Object) => {

  const { title, articleFile, imgFile } = props.product;
  // TODO: replace hard coded path to path from redux store
  // NOTE: import/export doesn't work with dynamic paths
  const ProductArticle = require('./articles/' + articleFile);

  debugger;
  return (
    <section>
      <PageHeader> { title } </PageHeader>
      <Row>
        <Col xs={9}>
          <ProductArticle />
        </Col>
        <Col xs={3}>
          <Image responsive={true} className={'pull-right'} src={require('./images/' + imgFile)} alt="Image"/>
        </Col>
      </Row>
    </section>
  );

  // NOTE: could sanitize when submitting new data through admin and when
  // fetching to redux store... This way, redux store would contain safe
  // html, so I wouldn't need to sanitize every time I load a page...
  // _createSafeHtml(htmlText: string) {
  //   const safeHtml = sanitize(htmlText);
  //
  //   return { __html: safeHtml }
  // }
}

Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default Product;
