// @flow

import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { PageHeader, Media, Image, Grid, Row, Col, Pager } from 'react-bootstrap';

import { goBack, push } from 'react-router-redux';

//import { sanitize } from 'dompurify';

const Product = (props: Object) => {

  const { title, articleFile, imgFile } = props.product;
  const href = `/produktai/${props.nextId}`;

  // TODO: replace hard coded path to path from redux store
  // NOTE: import/export doesn't work with dynamic paths
  const ProductArticle = require('./articles/' + articleFile);

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
      <div>
        <Pager>
          <Pager.Item previous onSelect={_onPrevClick}>&larr; Atgal</Pager.Item>
          <Pager.Item next disabled={!props.nextId} onSelect={_onNextClick}>Sekantis &rarr;</Pager.Item>
        </Pager>
      </div>
    </div>
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
  product: PropTypes.object.isRequired,
  nextId: PropTypes.string.isRequired
};

export default Product;
