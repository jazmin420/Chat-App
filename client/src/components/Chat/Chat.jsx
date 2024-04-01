import React, { useEffect} from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';
import { useLocation } from 'react-router-dom'; 
import './Chat.css'
import Info from '../Info/Info'
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from '../Textcontainer/TextContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setRoom, setUsers, setMessage, setMessages } from '../../REDUX/chatSlice';

let socket;

function Chat() {

  const location = useLocation();

  const dispatch = useDispatch();

  const name = useSelector((state) => state.chat.name);
  const room = useSelector((state) => state.chat.room);
  const users = useSelector((state) => state.chat.users);
  const message = useSelector((state) => state.chat.message);
  const messages = useSelector((state) => state.chat.messages);

  const ENDPOINT = 'https://chat-app-5kky.onrender.com/'

  useEffect(()=>{
    const {name, room} = queryString.parse(location.search);

    socket = io(ENDPOINT);

    dispatch(setName(name));
    dispatch(setRoom(room));

    socket.emit('join', {name, room}, () => {

    });

    return ()=>{
      socket.disconnect()

      socket.off();
    }
  },[ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', message => {
      dispatch(setMessages(message));
    });
    
    socket.on("roomData", ({ users }) => {
      dispatch(setUsers(users));
    });
}, []);

const sendMessage = (event) => {
  event.preventDefault();

  if(message) {
    socket.emit('sendMessage', message, () => dispatch(setMessage('')));
  }
}

  return (
    <>
    <div className="outerContainer">
      <div className="container">
          <Info room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      <div>
        <TextContainer users={users}/>
      </div>
    </div>
    </>
  )
}

export default Chat