import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Routes from "./routes";
import Reducers from "./reducers/index";
import * as serviceWorker from './serviceWorker';

const store = createStore(
    Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(
    <Provider store={store}>
        { Routes(store) }
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();