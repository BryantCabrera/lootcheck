import rootReducer from './index';

describe('rootReducer', () => {
    it('initializes the default state', () => {
        // rootReducer parameters: (initialState, incomingAction)
        expect(rootReducer({}, {})).toEqual({ balance: 0, bitcoin: {} });
    });
});