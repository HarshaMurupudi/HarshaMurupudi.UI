import React from 'react';

const renderMessage = (speaks, text) => {
  if (speaks === 'bot') {
    return (
      <div class='flex justify-end mb-4'>
        <div class='mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white'>
          {text}
        </div>
        <img
          src='https://source.unsplash.com/vpOeXr5wmR4/600x600'
          class='object-cover h-8 w-8 rounded-full'
          alt=''
        />
      </div>
    );
  } else {
    return (
      <div class='flex justify-start mb-4'>
        <img
          src='https://source.unsplash.com/vpOeXr5wmR4/600x600'
          class='object-cover h-8 w-8 rounded-full'
          alt=''
        />
        <div class='ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white'>
          {text}
        </div>
      </div>
    );
  }
};

function Message(props) {
  return (
    <div>
      <div class='w-full px-5 flex flex-col justify-between'>
        <div class='flex flex-col mt-5'>
          {renderMessage(props.speaks, props.text)}
        </div>
      </div>
    </div>
  );
}

export default Message;
