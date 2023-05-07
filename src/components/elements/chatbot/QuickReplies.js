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
    <div>
      <div class='flex justify-end mb-4'>
        <div class='mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white'>
          {props.text && <p>{props.text.stringValue}</p>}
        </div>
        {/* <div class='mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white'>
          {props.speaks}
        </div> */}
        <img
          src='https://source.unsplash.com/vpOeXr5wmR4/600x600'
          class='object-cover h-8 w-8 rounded-full'
          alt=''
        />
      </div>
      <div>
        <div>{renderQuickReplies(props.payload)}</div>
      </div>
    </div>
  );
}

export default QuickReplies;
