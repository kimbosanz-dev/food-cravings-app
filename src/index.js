import store from './redux/store';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
,document.getElementById('root'));
