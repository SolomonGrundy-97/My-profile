import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Projects from './Projects';

describe('Projects Component', () => {
  test('renders project titles and descriptions', () => {
    render(<Projects />);

    // Check if the project titles are rendered
    expect(screen.getByText(/saloon project/i)).toBeInTheDocument();
    expect(screen.getByText(/geo-world project/i)).toBeInTheDocument();

    // Check if the project descriptions are rendered
    expect(
      screen.getByText(/A saloon project built with html, css, bootstrap/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/A simple website that tells a little about mammals/i)
    ).toBeInTheDocument();
  });

  test('renders project images with correct alt text', () => {
    render(<Projects />);

    // Check if project images are rendered with correct alt text
    const saloonImg = screen.getByAltText('my-saloon-project-image');
    const geoWorldImg = screen.getByAltText('my-geo-world-project-image');

    expect(saloonImg).toBeInTheDocument();
    expect(geoWorldImg).toBeInTheDocument();
  });

  test('view buttons link to correct project URLs', () => {
    render(<Projects />);

    // Check if "View" buttons have the correct hrefs
    const saloonLink = screen.getByText(/view/i).closest('a');
    expect(saloonLink).toHaveAttribute('href', 'https://my-saloon.vercel.app');

    const geoWorldLink = screen.getByText(/view/i, { selector: 'a:nth-of-type(2)' });
    expect(geoWorldLink).toHaveAttribute('href', 'https://animal-world-gamma.vercel.app');
  });

  test('renders the pagination button', () => {
    render(<Projects />);

    // Check if the pagination button is rendered
    const paginationButton = screen.getByText(/see more/i);
    expect(paginationButton).toBeInTheDocument();
  });
});
