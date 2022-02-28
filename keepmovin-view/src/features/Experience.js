import React from 'react';
import {createSlice} from "@reduxjs/toolkit";


const initialStateValue = [];
export const ExperienceSlice = createSlice({
    name: "experience",
    initialState: {value: initialStateValue},
    reducers: {
        changeExperience: (state, action) => {
            state.value = action.payload
            console.log(state.value);
        },
        clearExperience: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeExperience, clearExperience} = ExperienceSlice.actions;

export default ExperienceSlice.reducer;