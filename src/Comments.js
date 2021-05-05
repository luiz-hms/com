import React from 'react';
import Comment from './Comment';

const Comments = ({comments}) => {
  return (
    <div>
      {comments.map(c => <Comment c={c}/> )
      }
      </div>
    )
  }

export default Comments;