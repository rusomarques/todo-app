import React from 'react';
import { render, screen } from './test/test-utils';
import App from './App';

test('renders add new todos', () => {
  render(<App />);
  expect(screen.getByText(/add new todo/i)).toBeInTheDocument();
});
