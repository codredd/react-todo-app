import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('tests the App root component', function () {
  it('should render awesome text', function () {
    render(<App />);
    expect(screen.getByText(/awesome/)).toBeInTheDocument();
  });
});
