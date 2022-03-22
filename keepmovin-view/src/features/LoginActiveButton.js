import React from 'react';
import {createSlice} from "@reduxjs/toolkit";


const initialStateValue = '';
export const LoginActiveButtonSlice = createSlice({
    name: "loginActiveButton",
    initialState: {value: initialStateValue},
    reducers: {
        changeLoginActiveButton: (state, action) => {
            state.value = action.payload
        },
        clearLoginActiveButton: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeLoginActiveButton, clearLoginActiveButton} = LoginActiveButtonSlice.actions;

export default LoginActiveButtonSlice.reducer;