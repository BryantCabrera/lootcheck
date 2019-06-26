import * as constants from '../actions/constants';
// read_cookie takes in a string which identifies which cookie we want to read
// bake_cookie takes in a string in the 1st parameter to identify what cookie we want to bake, 2nd parameter is the data we provide that we want to store
import { read_cookie, bake_cookie } from 'sfcookies';

// each cookie is identified by a unique string
const BALANCE_COOKIE = 'BALANCE_COOKIE';

// default parameter assignment sets state = 0 if it is undefined
const balance = (state = 0, action) => {
    let balance;
    
    switch (action.type) {
        case constants.SET_BALANCE:
            // return action.balance;
            balance = action.balance;
            break;
        case constants.DEPOSIT:
            // return state + action.deposit;
            balance = state + action.deposit;
            break;
        case constants.WITHDRAW:
            // return state - action.withdrawal;
            balance = state - action.withdrawal;
            break;
        default:
            // if 1st is undefined, the or case will return state
            // return parseInt(read_cookie(BALANCE_COOKIE)) || state;
            balance = parseInt(read_cookie(BALANCE_COOKIE)) || state;
    }

    // bakes a new cookie under BALANCE_COOKIE string and assigns it our balance value
    bake_cookie(BALANCE_COOKIE, balance);
    // How did the testing environment have access to browser cookies ?
        // Jest makes a mock document in document.window object for the environment that’s available to fully simulate the object that we would find on a browser
        // The cookies take advantage of this window object
        // Since jest provides that window object, we can safely test those cookies

    return balance;
}

export default balance;