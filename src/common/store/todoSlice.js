/* eslint no-param-reassign: 0 */
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const updatedTodoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
      state.todos[updatedTodoIndex].task = action.payload.task;
    },
    toggleIsDone: (state, action) => {
      const updatedTodoIndex = state.todos.findIndex(todo => todo.id === action.payload);
      const isDone = state.todos[updatedTodoIndex].done;
      state.todos[updatedTodoIndex].done = !isDone;
    }
  }
});

export const { addTodo, removeTodo, editTodo, toggleIsDone } = todoSlice.actions;

export default todoSlice.reducer;
