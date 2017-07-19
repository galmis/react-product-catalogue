// @flow

import React from 'react';
import PropTypes from 'prop-types';

import type { WPComment, ThreadData } from '../../types';

type Props = {
  comment: WPComment,
  replyComment: (commentToReplyId: number) => void,
  fetchedThread: ?ThreadData,
}

const Comment = (props: Props) => {

  const { comment, replyComment } = props;

  return (
    <div>
      <div className="comment-info">
        <div className="comment-date">{comment.date.replace('T', ' ')}</div>
        <div className="comment-author"><b>{comment.author_name}</b></div>
      </div>
      <div className="comment">
        <div dangerouslySetInnerHTML={ { __html: comment.content.rendered } } />
        {
          <a className="comment-log-in"
            onClick={ () => replyComment(comment.id) }>
            Atsakyti
          </a>
        }
      </div>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  replyComment: PropTypes.func.isRequired
};

export default Comment;
