import React from 'react';

const ApprovalCard = props => {
  return (
    <div className="approval-card">
      {props.children}
      <hr/>
      <div className="buttons">
        <button className="btn btn-approve">Approve</button>
        <button className="btn btn-decline">Decline</button>
      </div>
    </div>
  );
}

export default ApprovalCard;