// @flow

import { SUCCESS, WARNING, ERROR } from './COMMENT_FORM_STATUS_TYPE';

const COMMENT_FORM_STATUS = Object.freeze({
  ['201']: {
    type: SUCCESS,
    code: 201,
    message: 'Komentaras išsiųstas sėkmingai.',
  },
  ['400']: {
    type: ERROR,
    code: 400,
    message: 'Komentaras neišsiųstas. Palaukite 15 sekundžių ir bandykite dar kartą.'
  },
  ['409']: {
    type: ERROR,
    code: 409,
    message: 'Komentaras neišsiųstas. Jūsų komentaras su tokiu pačiu tekstu jau egzistuoja.'
  }
});

export default COMMENT_FORM_STATUS;
