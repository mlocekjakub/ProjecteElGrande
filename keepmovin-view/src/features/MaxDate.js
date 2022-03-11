import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = "";
export const maxDateSlice = createSlice({
    name: "maxDate",
    initialState: {value: initialStateValue},
    reducers: {
        changeMaxDate: (state, action) => {
            state.value = action.payload
        },
        clearMaxDate: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeMaxDate, clearMaxDate} = maxDateSlice.actions;

export default maxDateSlice.reducer;