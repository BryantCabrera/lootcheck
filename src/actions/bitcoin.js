import { FETCH_BITCOIN } from './constants';

export const fetchBitCoin = () => {
    // with this dispatch, we can return an asynchronous fetch
    // we trust that dispatch is returned from the thunk middleware
    return dispatch => {
        return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            // this final bitcoin: json is the data we are getting from the endpoint
            .then(json => dispatch({ type: FETCH_BITCOIN, bitcoin: json }));
    }
}