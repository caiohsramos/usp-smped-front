import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Routes from "./routes";
import Reducers from "./reducers/index";

const store = createStore(
    Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(
    <Provider store={store}>
        { Routes(store) }
    </Provider>,
    document.querySelector("[app-container]")
);