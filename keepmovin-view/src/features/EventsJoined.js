import React from 'react';
import {createSlice} from "@reduxjs/toolkit";


const initialStateValue = [];
export const EventsJoinedSlice = createSlice({
    name: "eventsJoined",
    initialState: {value: initialStateValue},
    reducers: {
        changeEventsJoined: (state, action) => {
            state.value = action.payload
        },
        clearEventsJoined: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeEventsJoined, clearEventsJoined} = EventsJoinedSlice.actions;

export default EventsJoinedSlice.reducer;