import React from 'react';

const CommentDetail = props => {
  return (
    <div className="comment">
      <div className="avatar">
        <img src={props.avatarURL} alt="avatar" />
      </div>
      <div className="comment--detail">
        <div className="comment--detail__header">
          <span className="user-name">{props.userName}</span>
          <span className="date">{props.date}</span>
        </div>
        <p className="comment--detail__content">
          {props.content}
        </p>
      </div>
    </div>
  );
}

export default CommentDetail;