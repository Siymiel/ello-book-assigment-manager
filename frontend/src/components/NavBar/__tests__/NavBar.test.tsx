import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../NavBar';

describe('NavBar Component', () => {
  test('renders the AppBar with the correct text', () => {
    render(<NavBar />);

    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();

    const title = screen.getByText(/Ello Book Assignment Manager/i);
    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle({ color: 'rgb(255, 255, 255)' });
  });

  test('has the correct AppBar background color', () => {
    render(<NavBar />);

    const appBar = screen.getByRole('banner');
    expect(appBar).toHaveStyle('background-color: rgb(51, 92, 110)')
  });
});
