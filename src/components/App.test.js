import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { exportAllDeclaration } from '@babel/types';

describe('App', () => {
    const app = shallow(<App />);

    it('renders properly', () => {
        exportAllDeclaration(app).toMatchSnapshot();
    });
});