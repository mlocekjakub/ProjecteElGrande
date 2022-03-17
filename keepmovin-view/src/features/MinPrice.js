import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = 0;
export const minPriceSlice = createSlice({
    name: "minPrice",
    initialState: {value: initialStateValue},
    reducers: {
        changeMinPrice: (state, action) => {
            state.value = action.payload
        },
        clearMinPrice: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeMinPrice, clearMinPrice} = minPriceSlice.actions;

export default minPriceSlice.reducer;