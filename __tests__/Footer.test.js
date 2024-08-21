import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders contact information', () => {
    render(<Footer />);

    // Check if email is rendered
    expect(screen.getByText('uzosolos@gmail.com')).toBeInTheDocument();

    // Check if phone number is rendered
    expect(screen.getByText('+2349097441714')).toBeInTheDocument();
  });

  test('renders social media icons with correct links', () => {
    render(<Footer />);

    // Check if Facebook icon is rendered and has the correct href
    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    expect(facebookLink).toHaveAttribute(
      'href',
      'https://www.facebook.com/profile.php?id=100080114964011'
    );

    // Check if Twitter icon is rendered and has the correct href
    const twitterLink = screen.getByRole('link', { name: /twitter/i });
    expect(twitterLink).toHaveAttribute(
      'href',
      'https://x.com/Solomon1279501?s=08'
    );

    // Check if LinkedIn icon is rendered and has the correct href
    const linkedInLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedInLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/solomon-uzoma-2a691b189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    );

    // Check if WhatsApp icon is rendered and has the correct href
    const whatsAppLink = screen.getByRole('link', { name: /whatsapp/i });
    expect(whatsAppLink).toHaveAttribute(
      'href',
      'https://wa.me/2349097441714?text=Hello%20%F0%9F%91%8B%20thank%20you%20for%20contacting%20Uzoma%20Solomon%2C%20how%20can%20I%20help%20you%20please%3F%20%F0%9F%98%8A'
    );
  });

  test('Download CV button works and opens a new tab', () => {
    render(<Footer />);

    // Mock window.open to test its call
    const mockOpen = jest.fn();
    window.open = mockOpen;

    // Click the Download CV button
    const downloadCvButton = screen.getByRole('button', { name: /download cv/i });
    fireEvent.click(downloadCvButton);

    // Check if window.open was called with the correct arguments
    expect(mockOpen).toHaveBeenCalledWith('/my-cv.pdf', '_blank');
  });

  test('displays copyright text', () => {
    render(<Footer />);

    // Check if copyright text is displayed correctly
    expect(screen.getByText(/Copyright © Solomon Uzoma 2024./i)).toBeInTheDocument();
  });
});
