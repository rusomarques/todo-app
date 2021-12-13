import { ACTION_TYPES } from './actionTypes';

export const addTodo = newTodo => ({
  type: ACTION_TYPES.ADD_TODO,
  payload: newTodo
});

export const editTodo = payload => ({
  type: ACTION_TYPES.EDIT_TODO,
  payload
});

export const removeTodo = todoId => ({
  type: ACTION_TYPES.REMOVE_TODO,
  payload: todoId
});

export const toggleIsDone = todoId => ({
  type: ACTION_TYPES.TOGGLE_IS_DONE,
  payload: todoId
});
