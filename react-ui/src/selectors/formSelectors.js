// @flow

function getFormState(state: Object) {
  return state.form ? state.form : state;
}

function getForm(state: Object, formName: string): Object {
  const form = getFormState(state)[formName];
  return form ? form : {};
}

function getCommentFormStatusCode(state: Object): ?number {
  return getForm(state, 'commentForm').status;
}

export {
  getCommentFormStatusCode
}
