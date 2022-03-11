import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = {
    email: "",
    password: "",
};
export const LoginSlice = createSlice({
    name: "Login",
    initialState: {value: initialStateValue},
    reducers: {
        changeLoginData: (state, action) => {
            state.value = action.payload
        },
        clearLoginData: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeLoginData, clearLoginData} = LoginSlice.actions;

export default LoginSlice.reducer;