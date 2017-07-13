// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import {Row, Grid, Button, FormGroup, FormControl, Form} from 'react-bootstrap';

type Props = {
  cancelReply: ?() => void,
  createComment: Function, // TODO: create types for action creators
  commentToReplyId: number,
  postId: string
};

const _onSubmit = (values) => {
  debugger;
}

let CommentForm = (props: Props) => {

  const { cancelReply } = props;

  return (
    <div id="comment-form" className='space-100'>
      <Form onSubmit={props.handleSubmit(_onSubmit)} data-toggle="validator">
        <Row>
          <div className="col-sm-6">
            <div>
              <h4>
                Palikite komentarą
                {
                  cancelReply
                  ? <span className='pull-right'><a onClick={cancelReply}>Atšaukti <i className="fa fa-close"></i></a></span>
                  : ''
                }
              </h4>
            </div>
            <FormGroup>
                <Field name='name' component='input' className='form-control' placeholder="Vardas" />
            </FormGroup>
            <FormGroup>
                <Field name='email' component='input' className='form-control' type="email" placeholder="Elektroninis paštas" />
            </FormGroup>
            <FormGroup>
                <Field name='comment' component='textarea' className='form-control' rows="5" placeholder="Komentaras" />
            </FormGroup>
            <Button type="submit" id="form-submit" className="btn-primary-filled btn-form-submit btn-rounded">Komentuoti</Button>
          </div>
        </Row>
      </Form>
    </div>
  );
};

CommentForm = reduxForm({
  // a unique name for the form
  form: 'commentForm'
})(CommentForm)

CommentForm.propTypes = {
  cancelReply: PropTypes.func,
  createComment: PropTypes.func.isRequired,
  commentToReplyId: PropTypes.number.isRequired,
  postId: PropTypes.string.isRequired
};

export default CommentForm;
