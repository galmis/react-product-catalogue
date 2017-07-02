// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-bootstrap';

import FancyHeader from '../shared/FancyHeader';

const Comments = (props: Object) => {


  const {post} = props;

  return (
    <div>
      <h3>Komentarai</h3>
    </div>
  );
};

// Comments.propTypes = {
//   posts: PropTypes.array.isRequired,
// };

export default Comments;
