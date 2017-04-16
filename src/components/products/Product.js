// @flow

import React, { Component, PropTypes } from 'react';

import { PageHeader, Media, Image } from 'react-bootstrap';

import { sanitize } from 'dompurify';

export default class Product extends Component {


  render() {

    const { title, htmlText } = this.props.product;

    debugger;
    return (
      <section>
        <PageHeader> { title } </PageHeader>
        <Image className="pull-right responsive" src="http://placehold.it/320x150" alt="Image"/>
        <div dangerouslySetInnerHTML={this._createSafeHtml(htmlText)} />
      </section>
    );
  }

  // NOTE: could sanitize when submitting new data through admin and when
  // fetching to redux store... This way, redux store would contain safe
  // html, so I wouldn't need to sanitize every time I load a page...
  _createSafeHtml(htmlText: string) {
    const safeHtml = sanitize(htmlText);

    return { __html: safeHtml }
  }
}

Product.propTypes = {
  product: PropTypes.object.isRequired
};
