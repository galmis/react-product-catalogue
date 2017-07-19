// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field, reduxForm } from 'redux-form';

import {Row, Button, FormGroup, FormControl, Alert } from 'react-bootstrap';

import FormField from '../shared/FormField';

import type { Action, CreateCommentActionCreator } from '../../types';

import COMMENT_FORM_STATUS from '../../constants/COMMENT_FORM_STATUS';
import { SUCCESS, WARNING } from '../../constants/COMMENT_FORM_STATUS_TYPE';

type Props = {
  cancelReply: ?() => Action,
  //createComment: CreateCommentActionCreator, // TODO: create types for action creators
  actions: Object,
  commentToReplyId: number,
  postId: string,
  handleSubmit: Function,
  statusCode: ?number,
  submitting: boolean
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
  if (!props.submitting) {
    const { actions, commentToReplyId, postId } = props;
    const { name, email, comment } = values;

    actions.createComment(comment, postId, name, email, commentToReplyId);
  }
}

function _renderFormStatus(statusCode: number, dismissStatus: Function) {
  debugger;
  const status = COMMENT_FORM_STATUS[''+statusCode];
  let style = 'danger';
  let statusMsg = 'Klaida - ' + statusCode;
  if (status) {
    if (status.type === SUCCESS) {
      style = 'success';
    } else if (status.type === WARNING) {
      style = 'warning';
    }

    statusMsg = status.message ? status.message : statusMsg;
  }

  return (
    <Alert bsStyle={style} onDismiss={dismissStatus}>
      <strong>{statusMsg}</strong>
    </Alert>
  );
}

let CommentForm = (props: Props) => {

  const { cancelReply, statusCode, submitting } = props;

  return (
    <section id="comment-form">
      <Form onSubmit={props.handleSubmit(_onSubmit)}>
        <Row>
          <div className="col-sm-6">
            { statusCode && _renderFormStatus(statusCode, props.actions.dismissStatus) }
            <h4>
              Palikite komentarą
              {
                cancelReply
                ? <span className='pull-right'><a onClick={cancelReply}>Atšaukti <i className="fa fa-close"></i></a></span>
                : ''
              }
            </h4>
            <Field name='name' component={FormField} type='text' label='Vardas' componentClass='input' />
            <Field name='email' component={FormField} type="email" label="Elektroninis paštas" componentClass='input' />
            <Field name='comment' component={FormField} componentClass='textarea' rows="5" label="Komentaras" />
            <Button type="submit" id="form-submit" className="btn-primary-filled btn-form-submit btn-rounded" disabled={submitting}>Komentuoti</Button>
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
  statusCode: PropTypes.number,
  actions: PropTypes.object.isRequired,
  commentToReplyId: PropTypes.number.isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentForm;
