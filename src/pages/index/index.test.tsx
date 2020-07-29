import React from 'react';
import Index from './index';
import { render, cleanup, fireEvent } from '@testing-library/react';

afterAll(cleanup);

test('click + button will increase count by 1', () => {
  const { getByTestId, getByText } = render(<Index />);

  expect(getByTestId('count').textContent).toBe('0');

  fireEvent.click(getByText('+'));

  expect(getByTestId('count').textContent).toBe('1');
});
