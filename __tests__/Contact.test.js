import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from './Contact';

describe('Contact Component', () => {
  test('renders all input fields', () => {
    render(<Contact />);

    // Check if name input is rendered
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();

    // Check if email input is rendered
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument();

    // Check if textarea for the message is rendered
    expect(screen.getByPlaceholderText('Your message')).toBeInTheDocument();
  });

  test('renders Submit button and spinner is initially hidden', () => {
    render(<Contact />);

    // Check if Submit button is rendered
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();

    // Check if spinner is initially hidden
    const spinner = screen.getByRole('status');
    expect(spinner).toHaveClass('d-none');
  });

  test('Submit button is disabled when inputs are empty', () => {
    render(<Contact />);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled(); // Button should be disabled with empty fields
  });

  test('Submit button is enabled when inputs are filled', () => {
    render(<Contact />);

    // Fill out the inputs
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Your message'), { target: { value: 'Hello there!' } });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).not.toBeDisabled(); // Button should be enabled with filled fields
  });

  test('displays spinner and changes button text on submit', () => {
    jest.useFakeTimers(); // Mock timers for the setTimeout

    render(<Contact />);

    // Fill out the inputs
    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Your email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Your message'), { target: { value: 'Hello there!' } });

    const submitButton = screen.getByRole('button', { name: /submit/i });
    
    // Click submit button
    fireEvent.click(submitButton);

    // Check if spinner is visible after clicking the button
    const spinner = screen.getByRole('status');
    expect(spinner).not.toHaveClass('d-none');

    // Fast-forward time by 2 seconds
    jest.advanceTimersByTime(2000);

    // Check if spinner is hidden after timeout
    expect(spinner).toHaveClass('d-none');

    // Check if button text changes to "Submitted"
    expect(submitButton).toHaveTextContent('Submitted');

    jest.useRealTimers(); // Restore the original timer behavior
  });
});
