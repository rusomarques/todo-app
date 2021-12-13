import * as React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test/test-utils';
import { getRandomWordsBetween } from '../../test/helpers';
import { Form } from './Form';

test('input is cleared after submitting', () => {
  render(<Form />);
  const newTodo = getRandomWordsBetween(1, 5);

  const input = screen.getByRole('textbox', { name: /new todo/i });
  userEvent.type(input, newTodo);
  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  expect(input).toBeEmpty();
});
