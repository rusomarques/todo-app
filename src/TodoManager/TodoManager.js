import React from 'react';
import { Form } from './Form/Form';
import { TodoList } from './TodoList/TodoList';
import { TodoResume } from './TodoResume/TodoResume';

export const TodoManager = () => (
  <section className="todo-manager">
    <TodoResume />
    <TodoList />
    <Form />
  </section>
);
