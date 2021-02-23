import React, { useEffect } from 'react';
import { TODOS_STORAGE_KEY } from '../../common/constants';
import { TodoItem } from './TodoItem/TodoItem';
import styles from './TodoList.module.scss';

export const TodoList = () => {
  // const todos = useSelector(state => state.todos);
  const todos = [];

  useEffect(() => {
    window.localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <ul className={styles['todo-list']}>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
