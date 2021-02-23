import React from 'react';
import { useDispatch } from 'react-redux';
/* eslint-disable-next-line */
import PropTypes from 'prop-types';
import { removeTodo } from '../../../common/store/todoSlice';
import styles from './TodoItem.module.scss';

export const TodoItem = ({ id, task }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => dispatch(removeTodo(id));

  return (
    <li className={styles['todo-item']}>
      <p>{task}</p>
      <button type="button" onClick={deleteHandler}>
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired
};
