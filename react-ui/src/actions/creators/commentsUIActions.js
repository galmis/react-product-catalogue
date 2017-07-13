// @flow

import {
  REPLY_COMMENT
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

export {
  replyComment
}
