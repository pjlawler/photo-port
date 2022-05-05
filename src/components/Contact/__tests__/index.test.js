import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

describe('Nav component', () => {
    it('renders', () => {
        render(<ContactForm />);
    });

    it('matches snapshot', () => {
        const { asFragment } =   render(<ContactForm />);
        expect (asFragment()).toMatchSnapshot();
    })
});