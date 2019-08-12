import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import "bootstrap/dist/css/bootstrap.css"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import navbarReducer from './global/redux/navbar/navbarReducer'

const store = createStore(navbarReducer, { color: '#4d4d4d' });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
