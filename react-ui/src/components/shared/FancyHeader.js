// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-bootstrap';

const FancyHeader = (props: Object) => {

  const { title, subtitle } = props;


  return (
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
  );
};

FancyHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default FancyHeader;
