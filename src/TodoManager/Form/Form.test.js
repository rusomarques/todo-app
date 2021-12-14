import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test/test-utils';
import { getRandomWordsBetween } from '../../test/helpers';
import { Form } from './Form';

test('input is initialized empty', () => {
  render(<Form />);
  const input = screen.getByRole('textbox', { name: /new todo/i });

  expect(input).toHaveValue('');
});

test('input is cleared after submitting', () => {
  render(<Form />);
  const newTodo = getRandomWordsBetween(1, 5);

  const input = screen.getByRole('textbox', { name: /new todo/i });
  userEvent.type(input, newTodo);
  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(input).toHaveValue('');
});

test('input shows what user writes', () => {
  render(<Form />);
  const newTodo = getRandomWordsBetween(1, 5);

  const input = screen.getByRole('textbox', { name: /new todo/i });
  userEvent.type(input, newTodo);

  expect(input).toHaveValue(newTodo);
});

test('submit button is disabled if there is no input introduced', () => {
  render(<Form />);

  const input = screen.getByRole('textbox', { name: /new todo/i });
  const submitButton = screen.getByRole('button', { name: /submit/i });
  expect(input).toHaveValue('');
  expect(submitButton).toBeDisabled();
});

test('submit button is enabled when input is introduced', () => {
  render(<Form />);

  const newTodo = getRandomWordsBetween(1, 5);

  const input = screen.getByRole('textbox', { name: /new todo/i });
  userEvent.type(input, newTodo);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  expect(submitButton).toBeEnabled();
});
