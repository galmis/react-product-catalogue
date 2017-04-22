// @flow

import React from 'react';
import { Grid } from 'react-bootstrap';

const ProductHeader = (props: Object) => {

  const { title, thumbText } = props.product;


  return (
    <section>
    <section id="page-header" className="single-product">
      <Grid>
        <div className="page-header-content text-center">
          <div className="page-header wsub">
              <h1 className="page-title fadeInDown animated first">
                { title }
              </h1>
          </div>
          <p className="slide-text fadeInUp animated second">
            {thumbText}
          </p>
        </div>
      </Grid>
    </section>
    </section>
  );
};

export default ProductHeader;
