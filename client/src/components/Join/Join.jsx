import React from 'react'
import { Link } from 'react-router-dom'
import './Join.css'
import { useDispatch, useSelector } from 'react-redux';
import { setName, setRoom } from '../../REDUX/chatSlice';
import chatIcon from '../../assets/chatIcon.jpg'

function Join() {

  const dispatch = useDispatch();
  const name = useSelector((state) => state.chat.name);
  const room = useSelector((state) => state.chat.room);

  return (
    <>
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <img className='chatImg' src={chatIcon} alt="" />
          <div>
              <input type="text" className='joinInput' placeholder='Name' onChange={(e) => dispatch(setName(e.target.value))} />
            </div>
            <div>
              <input type="text" className='joinInput' placeholder='Room' onChange={(e) => dispatch(setRoom(e.target.value))} />
            </div>
            <Link onClick={e=> (!name || !room) ? e.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
              <button className='button'>Join Chat Room</button>
            </Link>
        </div>
      </div>
    </>
  )
}

export default Join
