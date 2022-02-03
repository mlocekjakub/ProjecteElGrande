import React from 'react';
import ReactDOM from 'react-dom';
/*import './index.css';*/
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
/*import Test from "./components/test.js";*/

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals()
