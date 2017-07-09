// @flow

import React from 'react';
import PropTypes from 'prop-types';

import {Row, Grid, Button} from 'react-bootstrap';

const CommentForm = (props: Object) => {

  return (
    <div id="comment-form" className='space-100'>
      <form id="commentForm" data-toggle="validator">
        <Row>
          <div className="col-sm-6">
            <div className="form-group">
                <input type="text" className="form-control" id="name" placeholder="Vardas" required="" />
            </div>
            <div className="form-group">
                <input type="email" className="form-control" id="email" placeholder="Elektroninis paštas" required="" />
            </div>
            <div className="form-group">
                <textarea id="message" className="form-control" rows="5" placeholder="Komentaras" required=""></textarea>
            </div>
            <button type="submit" id="form-submit" className="btn btn btn-primary-filled btn-form-submit btn-rounded">Komentuoti</button>
          </div>
        </Row>
      </form>
    </div>
  );
};

// Comment.propTypes = {
//   comment: PropTypes.object.isRequired
// };

export default CommentForm;
