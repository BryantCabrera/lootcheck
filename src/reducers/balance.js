import * as constants from '../actions/constants';

// default parameter assignment sets state = 0 if it is undefined
const balance = (state = 0, action) => {
    switch (action.type) {
        case constants.SET_BALANCE:
            return action.balance;
        default:
            return balance;
    }
}

export default balance;