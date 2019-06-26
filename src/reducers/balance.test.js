import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
    it('sets a balance', () => {
        const balance = 10;

        // reducer takes 2 parameters: 
            // previousState; in the beginning, it's undefined
            // an object containing data; where actions are taken care of
        expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
            .toEqual(balance);
    });

    it('deposits into the balance', () => {
        const deposit = 10;
        const initialState = 5;

        expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit }))
            .toEqual(initialState + deposit);
    });
});