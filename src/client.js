import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AppComponent from './app';

ReactDOM.hydrate(
        <BrowserRouter>
            <AppComponent />
        </BrowserRouter>,
    document.querySelector('#root')
);
