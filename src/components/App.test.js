import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });

    it('contains a connected Wallet component', () => {
        // Because our Wallet component was connected to redux, we need to import the connected one
            // Use the following enzyme trick
            // This will tell you what the component looks like (should be wrapped with <Connect(Wallet) />
        console.log(app.debug());

        expect(app.find('Connect(Wallet)').exists()).toBe(true);
    });
});