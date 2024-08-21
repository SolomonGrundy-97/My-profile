import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from './Nav';

describe('Nav Component', () => {
  test('renders logo image', () => {
    render(<Nav />);

    // Check if the logo image is rendered
    const logo = screen.getByAltText('logo_image');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', expect.stringContaining('logo_trial.png'));
  });

  test('renders navigation links', () => {
    render(<Nav />);

    // Check if navigation links are present
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
    expect(screen.getByText(/skills/i)).toBeInTheDocument();
    expect(screen.getByText(/projects/i)).toBeInTheDocument();
  });

  test('toggles the navigation menu on mobile', () => {
    render(<Nav />);

    // Check that the nav menu is collapsed by default
    const navMenu = screen.getByRole('navigation');
    expect(navMenu).toHaveClass('navbar-collapse');

    // Click the toggle button
    const toggleButton = screen.getByLabelText(/toggle navigation/i);
    fireEvent.click(toggleButton);

    // Ensure the collapse is no longer hidden after the toggle
    expect(navMenu).not.toHaveClass('collapse');
  });

  test('navbar links navigate to correct sections', () => {
    render(<Nav />);

    // Check if each navigation link has the correct href
    const aboutLink = screen.getByText(/about/i);
    expect(aboutLink).toHaveAttribute('href', '/#about');

    const contactLink = screen.getByText(/contact/i);
    expect(contactLink).toHaveAttribute('href', '/#contact');

    const skillsLink = screen.getByText(/skills/i);
    expect(skillsLink).toHaveAttribute('href', '/#skills');

    const projectsLink = screen.getByText(/projects/i);
    expect(projectsLink).toHaveAttribute('href', '/#projects');
  });
});
