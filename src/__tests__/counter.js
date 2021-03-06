import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Counter from '../counter';

afterEach(cleanup);

test('counter increments the count', () => {
  const { container } = render(<Counter />);
  const button = container.firstChild;
  expect(button.textContent).toBe('0');
  fireEvent.click(button);
  expect(button.textContent).toBe('1');
  // if we had a handler...
  // expect(handleClick).toHaveBeenCalledTimes(1)
});
