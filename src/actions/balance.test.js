import * as constants from './constants';
import * as actions from './balance';

it('creates an action to set the balance', () => {
    const balance = 0;

    // types are usually SCREEN_CASED
    const expectedAction = { type: constants.SET_BALANCE, balance }
    
    // generated actions is camelCase
    expect(actions.setBalance(balance)).toEqual(expectedAction);
});