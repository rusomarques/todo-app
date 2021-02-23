import React from 'react';
import { Form } from './Form/Form';
import { TodoList } from './TodoList/TodoList';

export const TodoManager = () => (
  <section className="todo-manager">
    <header>Todo APP</header>
    <TodoList />
    <Form />
  </section>
);
