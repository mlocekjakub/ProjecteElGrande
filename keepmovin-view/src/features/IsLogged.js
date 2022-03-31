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
    },
});


export const {changeIsLogged} = IsLoggedSlice.actions;

export default IsLoggedSlice.reducer;
