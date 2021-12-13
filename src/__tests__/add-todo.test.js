import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../test/test-utils';
import { getRandomWordsBetween } from '../test/helpers';
import App from '../App';

test('when submitted a new todo, it should be added to list', () => {
  render(<App />);

  const newTodo = getRandomWordsBetween(1, 5);
  const input = screen.getByRole('textbox', { name: /new todo/i });
  const submitBtn = screen.getByRole('button', { name: /submit/i });

  userEvent.type(input, newTodo);
  userEvent.click(submitBtn);

  expect(screen.getByText(newTodo)).toBeInTheDocument();
});

test('when submitted a new todo, number of todos in header resume should increase by one', () => {
  render(<App />);

  const newTodo = getRandomWordsBetween(1, 5);
  const input = screen.getByRole('textbox', { name: /new todo/i });
  const submitBtn = screen.getByRole('button', { name: /submit/i });

  userEvent.type(input, newTodo);
  userEvent.click(submitBtn);
  const message = screen.getByText(/you have/i);

  expect(message).toHaveTextContent('You have 1 Todo');
});
