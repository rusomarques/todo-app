/* eslint no-param-reassign: 0 */
import { createSlice } from '@reduxjs/toolkit';
import { TODOS_STORAGE_KEY } from '../constants';
import { getFromLocalStorage } from '../utils/localStorage';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: getFromLocalStorage(TODOS_STORAGE_KEY, [])
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const todoToEdit = state.todos.find(todo => todo.id === action.payload.id);
      if (todoToEdit) todoToEdit.task = action.payload.task;
    },
    toggleIsDone: (state, action) => {
      const updatedTodo = state.todos.find(todo => todo.id === action.payload);
      if (updatedTodo) updatedTodo.done = !updatedTodo.done;
    }
  }
});

export const { addTodo, removeTodo, editTodo, toggleIsDone } = todoSlice.actions;

export default todoSlice.reducer;
