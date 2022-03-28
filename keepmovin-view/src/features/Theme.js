import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = 'light';
export const ThemeSlice = createSlice({
    name: "theme",
    initialState: {value: initialStateValue},
    reducers: {
        changeTheme: (state, action) => {
            state.value = action.payload
        },
        clearTheme: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeTheme, clearTheme} = ThemeSlice.actions;

export default ThemeSlice.reducer;