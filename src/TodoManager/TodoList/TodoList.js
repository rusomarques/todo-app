import React from 'react';
import { useSelector } from 'react-redux';

export const TodoList = () => {
  const todos = useSelector(state => state.todos);

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
};
