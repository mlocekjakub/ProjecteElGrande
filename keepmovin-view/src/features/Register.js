import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = {
    email: "",
    password: "",
    confirmPassword: "",
};
export const RegisterSlice = createSlice({
    name: "Register",
    initialState: {value: initialStateValue},
    reducers: {
        changeRegisterData: (state, action) => {
            state.value = action.payload
        },
        clearRegisterData: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeRegisterData, clearRegisterData} = RegisterSlice.actions;

export default RegisterSlice.reducer;