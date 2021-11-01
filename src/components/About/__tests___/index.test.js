import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from "..";

//after each test, this ensures there is no leftover memory data that could give false result
afterEach(cleanup);

//declare the component we're testing
describe('About component', () => {
    //First test
    it('renders', () => {
        render(<About />);
    });

    //Second test
    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<About />);
        expect (asFragment()).toMatchSnapshot();
    })
})