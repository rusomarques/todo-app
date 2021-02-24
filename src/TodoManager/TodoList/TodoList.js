import React, { useEffect } from 'react';
import { TODOS_STORAGE_KEY } from '../../common/constants';
import { useSelector } from '../../common/hooks/useSelector';
import { setToLocalStorage } from '../../common/utils/localStorage';
import { TodoItem } from './TodoItem/TodoItem';
import styles from './TodoList.module.scss';

export const TodoList = () => {
  const todos = useSelector();

  useEffect(() => {
    setToLocalStorage(TODOS_STORAGE_KEY, todos);
  }, [todos]);

  return <ul className={styles['todo-list']}>{todos && todos.map(todo => <TodoItem key={todo.id} {...todo} />)}</ul>;
};
