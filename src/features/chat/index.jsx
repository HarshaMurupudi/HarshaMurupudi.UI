import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'universal-cookie';
import { v4 as uuid } from 'uuid';

import Message from '../../components/elements/chatbot/Message';
import Card from '../../components/elements/chatbot/Card';
import axios from '../../lib/axios';
import api from './api';

const cookies = new Cookies();

const useConstructor = (callBack = () => {}) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  if (hasBeenCalled) return;
  callBack();
  setHasBeenCalled(true);
};

function Chat() {
  useConstructor(() => {
    if (cookies.get('userID') === undefined) {
      cookies.set('userID', uuid(), { path: '/' });
    }
  });

  let mainRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    df_event_query('Welcome');
  }, []);

  useEffect(() => {
    mainRef.scrollIntoView({ behaviour: 'smooth' });
  }, [messages]);

  const df_text_query = async (text) => {
    const userSays = {
      speaks: 'user',
      msg: {
        text: {
          text,
        },
      },
    };

    try {
      const res = await axios.post(api.postTextQuery, {
        text,
        userID: cookies.get('userID'),
      });

      const newData = [];
      for (let msg of res.data.fulfillmentMessages) {
        const botSays = {
          speaks: 'bot',
          msg,
        };

        newData.push(botSays);
      }
      setMessages([...messages, userSays, ...newData]);
    } catch (error) {
      console.log('something went wrong!');
    }
  };
  const df_event_query = async (event) => {
    try {
      const res = await axios.post(api.postEventQuery, {
        event,
        userID: cookies.get('userID'),
      });

      const newData = [];
      for (let msg of res.data.fulfillmentMessages) {
        let says = {
          speaks: 'bot',
          msg,
        };

        newData.push(says);
      }

      setMessages([...messages, ...newData]);
    } catch (error) {
      console.log('something went wrong!');
    }
  };

  const renderCards = (cards) => {
    return cards.map((card, i) => <Card key={i} payload={card.structValue} />);
  };

  const renderOneMessage = (message, i) => {
    if (message.msg && message.msg.text && message.msg.text.text) {
      return (
        <Message key={i} speaks={message.speaks} text={message.msg.text.text} />
      );
    } else if (
      message.msg &&
      message.msg.payload &&
      message.msg.payload.fields &&
      message.msg.payload.fields.cards
    ) {
      return (
        <div key={i}>
          <div>
            <div style={{ overflow: 'hidden' }}>
              <div className=''>
                <a>{message.speaks}</a>
              </div>
              {/* <div style={{ overflow: 'auto', overflowY: 'scroll' }}> */}
              <div className='flex overflow-x-auto'>
                {renderCards(message.msg.payload.fields.cards.listValue.values)}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const renderMessages = () => {
    if (messages) {
      return messages.map((message, i) => {
        //
        return renderOneMessage(message, i);
      });
    } else {
      return null;
    }
  };

  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    message && (await df_text_query(message));
    setMessage('');
  };

  return (
    <div>
      <div id='chatbot'>
        <h2>Chatbot</h2>
        {renderMessages()}
        <div
          ref={(el) => {
            mainRef = el;
          }}
          style={{ float: 'left', clear: 'both' }}
        ></div>
        <form onSubmit={handleSubmit}>
          <div class='flex flex-row items-center h-16 rounded-xl bg-white w-full px-0 md:px-4'>
            <div class='flex-grow ml-1 md:ml-4'>
              <div class='relative w-full'>
                <input
                  type='text'
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
            </div>
            <div className='ml-1 md:ml-4'>
              <button
                type='submit'
                class='flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0'
              >
                <span>Send</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;
