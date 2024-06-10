import * as React from 'react';
import Giscus from './Giscuss';

const Comments = () => {
  return (
    <div className="notion-comments">
      <h2 className="notion-h notion-h1">댓글</h2>
      <Giscus />
    </div>
  );
};

export default Comments;
