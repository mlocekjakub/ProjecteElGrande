import React from 'react';
import {createSlice} from "@reduxjs/toolkit";


const initialStateValue = 10000;
export const maxPriceSlice = createSlice({
    name: "maxPrice",
    initialState: {value: initialStateValue},
    reducers: {
        changeMaxPrice: (state, action) => {
            state.value = action.payload
        },
        clearMaxPrice: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeMaxPrice, clearMaxPrice} = maxPriceSlice.actions;

export default maxPriceSlice.reducer;