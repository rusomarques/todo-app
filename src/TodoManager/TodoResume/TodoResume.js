import React from 'react';
import { useSelector } from '../../common/hooks/useSelector';

export const TodoResume = () => {
  const todos = useSelector();
  const numberOfTodos = todos.length;
  const isPendingTodos = numberOfTodos > 0;
  const headerMessage = isPendingTodos
    ? `You have ${numberOfTodos} Todo${numberOfTodos > 1 ? 's' : ''}`
    : 'Add new Todo';

  return (
    <header>
      <h2>{headerMessage}</h2>
    </header>
  );
};
