import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './index';

test('renders learn react link', () => {
  render(<About />);
  const linkElement = screen.getByText(/This is the about page/i);
  expect(linkElement).toBeInTheDocument();
});
