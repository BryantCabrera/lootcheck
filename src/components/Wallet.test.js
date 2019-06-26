import React from 'react';
import { shallow } from 'enzyme';
import { Wallet } from './Wallet';

describe('Wallet', () => {
    const props = { balance: 20 }
    const wallet = shallow(<Wallet {...props} />);

    it('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    });

    it('displays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20');
    });

    // even though we already make sure Wallet renders, we want to make sure we have an input to type into
    it('creates an input to deposit into or withdraw from the balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    });

    describe('when the user types into the wallet input', () => {
        // when input on our DOM is rendered, it is a string by default and not converted automatically into a number
        const userBalance = '25';

        beforeEach(() => {
            wallet.find('.input-wallet')
                .simulate('change', { target: { value: userBalance } });
        });

        it('updates the local wallet balance in `state` and converts it to a number', () => {
            // parseInt(numberToConver, baseOfNumber)
                // use 10 to be in decimal system
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
        });
    });
});