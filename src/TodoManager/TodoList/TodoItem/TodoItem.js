import React, { useState } from 'react';
/* eslint-disable-next-line */
import PropTypes from 'prop-types';
import { TodoEditor } from '../TodoEditor/TodoEditor';
import { useDispatch } from '../../../common/hooks/useDispatch';
import { removeTodo, toggleIsDone } from '../../../common/store/actions';
import SvgEdit from '../../../common/assets/svg/components/iconEdit';
import SvgDelete from '../../../common/assets/svg/components/iconDelete';
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

      <div className={styles['todo-actions']}>
        {!isEditing && (
          <button className={styles['btn-edit']} type="button" onClick={onEdit}>
            <SvgEdit width="1.6rem" heigh="1.6rem" />
          </button>
        )}
        <button className={styles['btn-delete']} type="button" onClick={deleteHandler}>
          <SvgDelete width="1.6rem" heigh="1.6rem" />
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
