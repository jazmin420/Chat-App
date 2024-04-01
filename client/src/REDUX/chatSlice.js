import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  room: '',
  users: '',
  message: '',
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setRoom: (state, action) => {
      state.room = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
  },
});

export const { setName, setRoom, setUsers, setMessage, setMessages } = chatSlice.actions;

export default chatSlice.reducer;
