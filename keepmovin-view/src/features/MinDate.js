import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = "";
export const minDateSlice = createSlice({
    name: "minDate",
    initialState: {value: initialStateValue},
    reducers: {
        changeMinDate: (state, action) => {
            state.value = action.payload
        },
        clearMinDate: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeMinDate, clearMinDate} = minDateSlice.actions;

export default minDateSlice.reducer;