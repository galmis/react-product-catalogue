// @flow

import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

import ProductsThumbnails from './ProductsThumbnails';
import FilterContainer from './FilterContainer';

const Products = (props: Object) => {

  return (
    <section id="shop">
      <Grid>
        <div className="page-header text-center wsub">
          <h2>Produktai</h2>
        </div>

        <Row>
          <Col sm={12} className="content-area">
            <FilterContainer />
            <ProductsThumbnails products={props.products}/>
          </Col>
        </Row>
      </Grid>
    </section>
  );
};

export default Products;
