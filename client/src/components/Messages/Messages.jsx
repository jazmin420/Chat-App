import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Messages.css';
import Message from '../Message/Message';
import { useSelector } from 'react-redux';

function Messages() {

  const messages = useSelector((state) => state.chat.messages);
  const name = useSelector((state) => state.chat.name);

  return(
    <ScrollToBottom className="messages">
      {messages.map((message, i) => <div key={i}>
        <Message message={message} name={name}/>
        </div>)}
    </ScrollToBottom>
  )
}

export default Messages;