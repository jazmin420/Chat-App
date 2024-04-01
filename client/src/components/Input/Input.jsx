import React from 'react';
import './Input.css';
import { useSelector, useDispatch } from 'react-redux';
import { setMessage } from '../../REDUX/chatSlice';
function Input ({sendMessage}) {

  const dispatch = useDispatch();
  const message = useSelector((state) => state.chat.message);

  const handleInputChange = ({ target: { value } }) => {
    dispatch(setMessage(value));
  };

  return(
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={handleInputChange}
        onKeyDown={event => event.key === 'Enter' ? sendMessage(event) : null}
      />
      <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
    </form>
  )
}

export default Input;