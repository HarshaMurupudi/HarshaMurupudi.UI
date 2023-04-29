import React from 'react';

import QuickReply from './QuickReply';

function QuickReplies(props) {
  const _handleClick = (event, payload, text) => {
    props.replyClick(event, payload, text);
  };

  const renderQuickReply = (reply, i) => {
    return <QuickReply key={i} click={_handleClick} reply={reply} />;
  };

  const renderQuickReplies = (quickReplies) => {
    if (quickReplies) {
      return quickReplies.map((reply, i) => {
        return renderQuickReply(reply, i);
      });
    } else {
      return null;
    }
  };

  return (
    <>
      <div>
        {props.text && <p>{props.text.stringValue}</p>}
        {renderQuickReplies(props.payload)}
      </div>
    </>
  );
}

export default QuickReplies;
