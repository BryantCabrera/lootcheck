import React from 'react';
// render function handles rendering our react portion on the dom
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import rootReducer from './reducers/balance';
import { Provider } from 'react-redux'; // provides redux store to whole application
import App from './components/App';

// apply redux middleware thunk to our application at the root
const store = createStore(rootReducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);