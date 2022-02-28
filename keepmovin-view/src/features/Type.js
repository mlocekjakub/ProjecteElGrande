import React from 'react';
import {createSlice} from "@reduxjs/toolkit";


const initialStateValue = [];
export const TypeSlice = createSlice({
    name: "Type",
    initialState: {value: initialStateValue},
    reducers: {
        updateType: (state, action) => {
            state.value = action.payload
        },
        clearType: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {updateType, clearType} = TypeSlice.actions;

export default TypeSlice.reducer;