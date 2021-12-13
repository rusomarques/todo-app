import React, { useRef, useState, useEffect } from 'react';
/* eslint-disable-next-line */
import PropTypes from 'prop-types';
import { useDispatch } from '../../../common/hooks/useDispatch';
import { editTodo } from '../../../common/store/actions';
import styles from './TodoEditor.module.scss';

export const TodoEditor = ({ todoData, setIsEditing }) => {
  const dispatch = useDispatch();
  const [updatedTask, setUpdatedTask] = useState(todoData.task);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onConfirmEdition = e => {
    e.preventDefault();
    dispatch(editTodo({ id: todoData.id, task: updatedTask }));
    setIsEditing(false);
  };

  return (
    <form className={styles['form-edit-todo']} onSubmit={onConfirmEdition}>
      <input
        ref={inputRef}
        aria-label="Edit todo"
        value={updatedTask}
        onChange={e => setUpdatedTask(e.target.value)}
        onBlur={onConfirmEdition}
      />
    </form>
  );
};

TodoEditor.propTypes = {
  todoData: PropTypes.shape({
    id: PropTypes.string,
    task: PropTypes.string
  }).isRequired,
  setIsEditing: PropTypes.func.isRequired
};
