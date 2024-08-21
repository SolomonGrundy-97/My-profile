import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';

describe('About Component', () => {
  test('renders the profile image', () => {
    render(<About />);
    const profileImage = screen.getByAltText(/profile_image/i);
    expect(profileImage).toBeInTheDocument();
  });

  test('renders the social media icons', () => {
    render(<About />);
    const twitterIcon = screen.getByRole('link', { name: /twitter/i });
    const whatsappIcon = screen.getByRole('link', { name: /whatsapp/i });
    const facebookIcon = screen.getByRole('link', { name: /facebook/i });
    const linkedinIcon = screen.getByRole('link', { name: /linkedin/i });
    const githubIcon = screen.getByRole('link', { name: /github/i });

    expect(twitterIcon).toBeInTheDocument();
    expect(whatsappIcon).toBeInTheDocument();
    expect(facebookIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
  });

  test('renders the contact me button', () => {
    render(<About />);
    const contactButton = screen.getByRole('button', { name: /contact me/i });
    expect(contactButton).toBeInTheDocument();
  });

  test('renders the about me text', () => {
    render(<About />);
    const aboutMeText = screen.getByText(/I am a dedicated frontend developer/i);
    expect(aboutMeText).toBeInTheDocument();
  });
});
