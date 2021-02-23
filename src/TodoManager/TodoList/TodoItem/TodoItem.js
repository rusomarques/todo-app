import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
/* eslint-disable-next-line */
import PropTypes from 'prop-types';
import { removeTodo, toggleIsDone } from '../../../common/store/todoSlice';
import { TodoEditor } from '../TodoEditor/TodoEditor';
import styles from './TodoItem.module.scss';

export const TodoItem = ({ id, task, done }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const deleteHandler = () => dispatch(removeTodo(id));
  const isDoneToggler = () => dispatch(toggleIsDone(id));
  const onEdit = () => setIsEditing(true);

  return (
    <li className={styles['todo-item']}>
      <input type="checkbox" checked={done} onChange={isDoneToggler} />

      {!isEditing ? (
        <p className={done ? styles['todo-done'] : 'todo-pending'}>{task}</p>
      ) : (
        <TodoEditor todoData={{ id, task }} setIsEditing={setIsEditing} />
      )}

      <div className="todo-item-actions">
        {!isEditing && (
          <button type="button" onClick={onEdit}>
            Edit
          </button>
        )}
        <button type="button" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
};
