import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from "..";

afterEach(cleanup);

describe('Contact components', () => {
    it('renders', () => {
        render (<Contact />)
    })

    it('matches snapshot', () => {
        const { asFragment } = render (<Contact />)
        expect (asFragment()).toMatchSnapshot();
    })    

    it('h1 tag renders Contact me', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me') 
    })

    it('h1 tag is Contact Me', () => {
        const { getByTestId } = render(<Contact />)
        expect(getByTestId('submitBtn')).toHaveTextContent('Submit') 
    })
})