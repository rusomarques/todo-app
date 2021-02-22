/* eslint-disable */ 
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: state => {
      state.todos = [...state.todos, action.payload];
    }
  }
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
