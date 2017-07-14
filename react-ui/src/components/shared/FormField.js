// @flow

import React from 'react';

import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

type Meta = {
  touched: boolean,
  error: ?string,
  warning: ?string
}

type Props = {
  input: Object,
  label: string,
  type: string,
  rows: ?number,
  componentClass: string,
  meta: Meta
}

const _getValidationState = (isTouched: boolean, error: ?string, warn: ?string): ?string => {
  if (isTouched) {
    if (error) {
      return 'error'
    } else if (warn) {
      return 'warn'
    }
  }
};

const FormField = (props: Props) => {

  const { input, label, type, rows, componentClass, meta } = props;
  const { touched, error, warning } = meta;

  return (
    <FormGroup validationState={ _getValidationState(touched, error, warning)}>
      {
        touched && (error || warning) && <ControlLabel>{error || warning}</ControlLabel>
      }
      <FormControl {...input} placeholder={label} type={type} componentClass={componentClass} rows={rows} />
    </FormGroup>
  );
};


export default FormField
