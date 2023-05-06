import React from 'react';
import { Button } from 'flowbite-react';

function QuickReply(props) {
  const {
    reply: {
      structValue: {
        fields: { text, payload, link },
      },
    },
  } = props;

  if (payload) {
    return (
      <a
        href='#'
        className='px-6 py-3 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200'
        onClick={(event) =>
          props.click(event, payload.stringValue, text.stringValue)
        }
      >
        {text.stringValue}
      </a>
    );
  } else {
    return (
      <a
        href={link.stringValue}
        className='px-6 py-3 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600 hover:underline hover:text-blue-200'
      >
        {text.stringValue}
      </a>
    );
  }
}

export default QuickReply;
