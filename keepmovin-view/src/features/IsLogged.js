import React from 'react';
import {createSlice} from "@reduxjs/toolkit";


const initialStateValue = false;
export const IsLoggedSlice = createSlice({
    name: "isLogged",
    initialState: {value: initialStateValue},
    reducers: {
        changeIsLogged: (state, action) => {
            state.value = action.payload
        },
        clearIsLogged: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeIsLogged, clearIsLogged} = IsLoggedSlice.actions;

export default IsLoggedSlice.reducer;
