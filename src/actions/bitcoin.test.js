// https://api.coindesk.com/v1/bpi/currentprice.json
// 1.	Creating fake redux store
    // a.Because our asynchronous actions will create pure action objects that our store will use
    // b.We’ll only have access to the asynchronous action, not the pure action objects they create
    // c.But having a mock store will let us check the pure action object that is eventually to that store
import configureMockStore from 'redux-mock-store';
// redux-thunk lets us return something other than plain objects.  in our case, we might return a function or promise
import thunk from 'redux-thunk';
// alternate version of fetch
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './bitcoin';

// configureMockStore returns a function that actually creates our mock store
    // one argument it takes is an array of our middleware.  Thunk is the middleware we need
const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });

// fetchMock lets us stub an endpoint, or "block" the endpoint and return our own custom data instead
    // for our test, our mock BPI can be arbitrary
const mockResponse = { body: { bpi: 'bitcoin price index' } };

// get method takes 2 parameters: 
    // a string representing the endpoint we want to stub
    // an object representing what we want the stubbed endpoint to return
fetchMock.get(
    'https://api.coindesk.com/v1/bpi/currentprice.json',
    mockResponse
);

it('creates an async action to fetch the bitcoin value', () => {
    const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];

    // Jest: if we are executing and testing a promise in an it block, in order for it to successfully finish and execute the asynchronous code, we need to return a promise.  otherwise, jest can't properly execute the test
        // solution: return the .dispatch
    return store.dispatch(fetchBitcoin()).then(() => {
        expectedAction(store.getActions()).toEqual(expectedActions);
    });
});