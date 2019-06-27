import React from 'react';
import { mount, shallow } from 'enzyme';
import { Loot } from './Loot';

describe('Loot', () => {
    const mockFetchbitcoin = jest.fn();
    const props = { balance: 10, bitcoin: {} }
    let loot = shallow(<Loot {...props} />);

    it('renders properly', () => {
        expect(loot).toMatchSnapshot();
    });

    describe('when mounted', () => {
        beforeEach(() => {
            props.fetchBitcoin = mockFetchbitcoin;

            // We need mount function from enzyme instead of shallow
                // This renders all inner children and fires all life cycle hooks of a react component(like componentDidMount)
            loot = mount(<Loot {...props} />);
        });

        it('dispatches the `fetchBitcoin()` method it receives from props', () => {
            expect(mockFetchbitcoin).toHaveBeenCalled();
        });
    });
});