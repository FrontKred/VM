import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import storeFactory from './store';
import * as data from './data/initialData';
import "./index.css";

const store = storeFactory(data.VM);
render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('VM')
);