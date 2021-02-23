import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
/* eslint-disable-next-line */
import PropTypes from 'prop-types';
import { removeTodo } from '../../../common/store/todoSlice';
import styles from './TodoItem.module.scss';
import { TodoEditor } from '../TodoEditor/TodoEditor';

export const TodoItem = ({ id, task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const deleteHandler = () => dispatch(removeTodo(id));
  const onEdit = () => setIsEditing(true);

  return (
    <li className={styles['todo-item']}>
      {!isEditing ? <p>{task}</p> : <TodoEditor todoData={{ id, task }} setIsEditing={setIsEditing} />}

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
  task: PropTypes.string.isRequired
};
