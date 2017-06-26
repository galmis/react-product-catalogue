// @flow

import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

import FancyHeader from '../shared/FancyHeader';

const Blog = (props: Object) => {

  return (
    <div>
      <FancyHeader title='Blogas' />

      <Grid>
        Blogas...
      </Grid>
    </div>
  );
};

export default Blog;
