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
    console.log('Occurs ONCE, BEFORE the initial render.');

    if (cookies.get('userID') === undefined) {
      cookies.set('userID', uuid(), { path: '/' });
    }

    console.log(cookies.get('userID'));
  });

  let mainRef = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    df_event_query('Welcome');
  }, []);

  useEffect(() => {
    // df_event_query('Welcome');

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
    console.log(cards);
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
      console.log('hit card');
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

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      df_text_query(e.target.value);
      e.target.value = '';
    }
  };

  console.log(messages);

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
        <input type='text' onKeyPress={handleInputKeyPress} />
      </div>
    </div>
  );
}

export default Chat;
