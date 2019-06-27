import { combineReducers } from 'redux';
import balance from './balance';
import bitcoin from './bitcoin';

// combineReducers takes a mapped object where
    // Key = name of reducers
    // Value = actual reducers we want to map
export default combineReducers({ balance, bitcoin });
