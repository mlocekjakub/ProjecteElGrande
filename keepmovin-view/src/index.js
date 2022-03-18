import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {BrowserRouter} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {configureStore} from "@reduxjs/toolkit"
import SearchPhraseNavReducer from "./features/SearchPhraseNav"
import SportReducer from "./features/Sport"
import ExperienceReducer from "./features/Experience"
import TypeReducer from "./features/Type"
import MinParticipantsReducer from "./features/MinParticipants"
import MaxParticipantsReducer from "./features/MaxParticipants"
import minPriceReducer from "./features/MinPrice"
import maxPriceReducer from "./features/MaxPrice"
import rangeDateReducer from "./features/RangeDate"
import eventsJoinedReducer from "./features/EventsJoined"
import isLoggedReducer from "./features/IsLogged"
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {
        searchNav: SearchPhraseNavReducer,
        sports: SportReducer,
        experience: ExperienceReducer,
        type: TypeReducer,
        minParticipants: MinParticipantsReducer,
        maxParticipants: MaxParticipantsReducer,
        minPrice: minPriceReducer,
        maxPrice: maxPriceReducer,
        rangeDate: rangeDateReducer,
        eventsJoined: eventsJoinedReducer,
        isLogged: isLoggedReducer
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
