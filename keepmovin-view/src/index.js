import React from 'react';
import ReactDOM from 'react-dom';
/*import './index.css';*/
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {configureStore} from "@reduxjs/toolkit";
import SearchPhraseNavReducer from "./features/SearchPhraseNav";
import SportReducer from "./features/Sport"
import ExperienceReducer from "./features/Experience"
import TypeReducer from "./features/Type"
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {
        searchNav: SearchPhraseNavReducer,
        sports: SportReducer,
        experience: ExperienceReducer,
        type: TypeReducer,
        
    },
})

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals()
