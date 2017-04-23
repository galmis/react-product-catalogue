// @flow

import React from 'react';
import { Grid } from 'react-bootstrap';

const FancyHeader = (props: Object) => {

  const { title, subtitle } = props;


  return (
    <section>
      <div id="page-header" className="single-product">
        <Grid>
          <div className="page-header-content text-center">
            <div className="page-header wsub">
                <h1 className="page-title fadeInDown animated first">
                  { title }
                </h1>
            </div>
            <p className="slide-text fadeInUp animated second">
              { subtitle }
            </p>
          </div>
        </Grid>
      </div>
    </section>
  );
};

export default FancyHeader;
