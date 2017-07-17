// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field, reduxForm } from 'redux-form';

import {Row, Grid, Button, FormGroup, FormControl } from 'react-bootstrap';

import FormField from '../shared/FormField';

import type { Action, CreateCommentActionCreator } from '../../types';

import {
  getFormValues
} from 'redux-form'

type Props = {
  cancelReply: ?() => Action,
  createComment: CreateCommentActionCreator, // TODO: create types for action creators
  commentToReplyId: number,
  postId: string,
  handleSubmit: Function,
  reset: Function,
  change: Function
};

type FormValues = {
  name: string,
  email: string,
  comment: string
}

const _containsChar = (str: string) => {
  return !!str && !!str.trim();
}

const _validate = (values: FormValues) => {
  const errors = {}
  if (!_containsChar(values.name)) {
    errors.name = 'Tuščias laukelis';
  }
  if (!_containsChar(values.email)) {
    errors.email = 'Tuščias laukelis';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Blogas e-pašto formatas';
  }
  if (!_containsChar(values.comment)) {
    errors.comment = 'Tuščias laukelis';
  }
  return errors
}

const _onSubmit = (values: FormValues, dispatch: Function, props: Props) => {
  const { createComment, commentToReplyId, postId } = props;
  const { name, email, comment } = values;

  createComment(comment, postId, name, email, commentToReplyId);

  // TODO: clear field when comment successfully created
  // dispatch(change('commentForm', 'comment', ''))
}

let CommentForm = (props: Props) => {

  const { cancelReply, reset } = props;

  return (
    <section id="comment-form">
      <Form onSubmit={props.handleSubmit(_onSubmit)}>
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
            <Field name='name' component={FormField} type='text' label='Vardas' componentClass='input' />
            <Field name='email' component={FormField} type="email" label="Elektroninis paštas" componentClass='input' />
            <Field name='comment' component={FormField} componentClass='textarea' rows="5" label="Komentaras" />
            <Button type="submit" id="form-submit" className="btn-primary-filled btn-form-submit btn-rounded">Komentuoti</Button>
          </div>
        </Row>
      </Form>
    </section>
  );
};

CommentForm = reduxForm({
  // a unique name for the form
  form: 'commentForm',
  validate: _validate,
  destroyOnUnmount: false
})(CommentForm);

CommentForm.propTypes = {
  cancelReply: PropTypes.func,
  createComment: PropTypes.func.isRequired,
  commentToReplyId: PropTypes.number.isRequired,
  postId: PropTypes.string.isRequired
};

export default CommentForm;
