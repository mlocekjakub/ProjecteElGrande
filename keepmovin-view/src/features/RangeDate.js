import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = [{
    startDate: new Date(new Date().getFullYear(), 0, 1).toISOString(),
    endDate: new Date(new Date().getFullYear(), 12, 31).toISOString(),
}];
export const rangeDateSlice = createSlice({
    name: "rangeDate",
    initialState: {value: initialStateValue},
    reducers: {
        changeRangeDate: (state, action) => {
            state.value = action.payload
        },
        clearRangeDate: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeRangeDate, clearRangeDate} = rangeDateSlice.actions;

export default rangeDateSlice.reducer;