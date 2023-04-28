import React from 'react';

function QuickReplies(props) {
  const _handleClick = (event, payload, text) => {
    props.replyClick(event, payload, text);
  };

  return (
    <>
      <div></div>
    </>
  );
}

export default QuickReplies;
