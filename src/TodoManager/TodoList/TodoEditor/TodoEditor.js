import React, { useState } from 'react';
/* eslint-disable-next-line */
import PropTypes from 'prop-types';
import { useDispatch } from '../../../common/hooks/useDispatch';
import { editTodo } from '../../../common/store/actions';

export const TodoEditor = ({ todoData, setIsEditing }) => {
  const dispatch = useDispatch();
  const [updatedTask, setUpdatedTask] = useState(todoData.task);

  const onConfirmEdition = e => {
    e.preventDefault();
    dispatch(editTodo({ id: todoData.id, task: updatedTask }));
    setIsEditing(false);
  };

  return (
    <form onSubmit={onConfirmEdition}>
      <input aria-label="Edit todo" value={updatedTask} onChange={e => setUpdatedTask(e.target.value)} />
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
