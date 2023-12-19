import React from "react";
import {render} from "react-dom";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider as ReduxProvider} from "react-redux";
import {store} from "./redux/store";

render(
    <ReduxProvider store={store}>
        <Router>
            <App/>
        </Router>
    </ReduxProvider>
    , document.getElementById('app'));