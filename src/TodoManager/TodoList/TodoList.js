import React from 'react';
// import { TODOS_STORAGE_KEY } from '../../common/constants';
import { useSelector } from '../../common/hooks/useSelector';
import { TodoItem } from './TodoItem/TodoItem';
import styles from './TodoList.module.scss';

export const TodoList = () => {
  const todos = useSelector();

  // useEffect(() => {
  //   window.localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);

  return <ul className={styles['todo-list']}>{todos && todos.map(todo => <TodoItem key={todo.id} {...todo} />)}</ul>;
};
