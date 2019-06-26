import React from 'react';
// render function handles rendering our react portion on the dom
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/balance';
import { Provider } from 'react-redux'; // provides redux store to whole application
import App from './components/App';

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
);