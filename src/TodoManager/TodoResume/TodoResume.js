import React from 'react';
import { useSelector } from '../../common/hooks/useSelector';
import styles from './TodoResume.module.scss';

export const TodoResume = () => {
  const totalTodos = useSelector();
  const todos = totalTodos.filter(todo => !todo.done);
  const numberOfTodos = todos.length;
  const isPendingTodos = numberOfTodos > 0;
  const pendingTodosMessage = `${numberOfTodos} Todo${numberOfTodos > 1 ? 's' : ''}`;

  return (
    <header className={styles['todo-resume']}>
      {!isPendingTodos ? (
        <h2>Add new Todo</h2>
      ) : (
        <h2>
          You have <span className="highlight-yellow">{pendingTodosMessage}</span>
        </h2>
      )}
    </header>
  );
};
