import React from 'react';
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Header } from '../Header';
import { BrowserRouter } from 'react-router-dom';

const MockHeader = () => {
    return (
        <BrowserRouter>
          <Header />
        </BrowserRouter>
    )
}
describe('Header', () => {
  it('renders the logo and navigation links', () => {
    render(<MockHeader />);

    const logo = screen.getByRole('img', { name: 'logo' });
    expect(logo).toBeInTheDocument();

    const homeLink = screen.getByRole('link', { name: "Home"});
    /* const homeLink = screen.getByRole('link', { name: /home/i }); */
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByRole('link', { name: "About" });
    expect(aboutLink).toBeInTheDocument();

    const contactLink = screen.getByRole('link', { name: "Contact" });
    expect(contactLink).toBeInTheDocument();
  });

}); 
