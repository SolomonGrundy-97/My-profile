import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Skills from './Skills';
import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa';

describe('Skills Component', () => {
  test('renders skill icons and labels', () => {
    render(<Skills />);

    // Check if skill icons and labels are rendered
    expect(screen.getByText(/HTML/i)).toBeInTheDocument();
    expect(screen.getByText(/CSS/i)).toBeInTheDocument();
    expect(screen.getByText(/JAVASCRIPT/i)).toBeInTheDocument();
    expect(screen.getByText(/BOOTSTRAP/i)).toBeInTheDocument();
    expect(screen.getByText(/REACT/i)).toBeInTheDocument();
    expect(screen.getByText(/GITHUB/i)).toBeInTheDocument();
  });

  test('renders skill icons with correct aria-labels', () => {
    render(<Skills />);

    // Check if skill icons have correct alt text
    const htmlIcon = screen.getByRole('img', { name: /HTML/i });
    const cssIcon = screen.getByRole('img', { name: /CSS/i });
    const jsIcon = screen.getByRole('img', { name: /JAVASCRIPT/i });
    const bootstrapIcon = screen.getByRole('img', { name: /BOOTSTRAP/i });
    const reactIcon = screen.getByRole('img', { name: /REACT/i });
    const githubIcon = screen.getByRole('img', { name: /GITHUB/i });

    expect(htmlIcon).toBeInTheDocument();
    expect(cssIcon).toBeInTheDocument();
    expect(jsIcon).toBeInTheDocument();
    expect(bootstrapIcon).toBeInTheDocument();
    expect(reactIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
  });

  test('renders skill icons with correct sizes', () => {
    render(<Skills />);

    // Check if skill icons have the correct size
    const iconSizes = [90, 90, 90, 90, 90, 90]; // Expected sizes for each icon

    const icons = screen.getAllByRole('img');
    icons.forEach((icon, index) => {
      expect(icon).toHaveStyle(`font-size: ${iconSizes[index]}px`);
    });
  });
});
