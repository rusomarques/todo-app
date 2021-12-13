import React from 'react';
import { Form } from './Form/Form';
import { TodoList } from './TodoList/TodoList';
import { TodoResume } from './TodoResume/TodoResume';
import styles from './TodoManager.module.scss';

export const TodoManager = () => (
  <section className={styles['todo-manager']}>
    <TodoResume />
    <TodoList />
    <Form />
  </section>
);
