import React from 'react';
import {createSlice} from "@reduxjs/toolkit";


const initialStateValue = 10000;
export const MaxParticipantsSlice = createSlice({
    name: "maxParticipants",
    initialState: {value: initialStateValue},
    reducers: {
        changeMaxParticipants: (state, action) => {
            state.value = action.payload
        },
        clearMaxParticipants: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeMaxParticipants, clearMaxParticipants} = MaxParticipantsSlice.actions;

export default MaxParticipantsSlice.reducer;