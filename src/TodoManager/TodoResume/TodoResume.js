import React from 'react';

export function TodoResume() {
  // const todos = useSelector(state => state.todos);
  const todos = [];
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
}
