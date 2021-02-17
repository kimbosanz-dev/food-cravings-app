import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
<Provider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
,document.getElementById('root'));
