// @flow

import {
  REPLY_COMMENT,
  DISMISS_COMMENT_FORM_STATUS
} from '../../constants/ACTION_TYPE';

import type { Action } from '../../types';

function replyComment(commentToReplyId: number): Action {
  return {
    type: REPLY_COMMENT,
    payload: {
      commentToReplyId
    }
  };
}

function dismissStatus(): Action {
  return {
    type: DISMISS_COMMENT_FORM_STATUS
  }
}

export {
  replyComment,
  dismissStatus
}
