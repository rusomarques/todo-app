import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from '../../common/hooks/useDispatch';
import { addTodo } from '../../common/store/actions';
import styles from './Form.module.scss';

export const Form = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const addTodoHandler = e => {
    e.preventDefault();
    dispatch(addTodo({ id: uuidv4(), task: newTodo, done: false }));
    setNewTodo('');
  };

  return (
    <form className={styles['form-new-todo']}>
      <input
        className={styles['form-input']}
        aria-label="New todo"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Enter task"
      />
      <button className={styles['form-btn']} type="submit" onClick={addTodoHandler} disabled={!newTodo}>
        Submit
      </button>
    </form>
  );
};
