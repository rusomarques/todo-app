import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../../common/store/todoSlice';

export const Form = () => {
  const dispatch = () => {};
  const [newTodo, setNewTodo] = useState('');

  const addTodoHandler = e => {
    e.preventDefault();
    dispatch(addTodo({ id: uuidv4(), task: newTodo, done: false }));
    setNewTodo('');
  };

  return (
    <form>
      <input aria-label="New todo" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
      <button type="submit" onClick={addTodoHandler} disabled={!newTodo}>
        Submit
      </button>
    </form>
  );
};
