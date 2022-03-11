import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = [];
export const SportSlice = createSlice({
    name: "sports",
    initialState: {value: initialStateValue},
    reducers: {
        updateSport: (state, action) => {
            state.value = action.payload
        },
        clearSport: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {updateSport, clearSport} = SportSlice.actions;

export default SportSlice.reducer;