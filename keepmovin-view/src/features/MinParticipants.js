import React from 'react';
import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = 0;
export const minParticipantsSlice = createSlice({
    name: "minParticipants",
    initialState: {value: initialStateValue},
    reducers: {
        changeMinParticipants: (state, action) => {
            state.value = action.payload
        },
        clearMinParticipants: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeMinParticipants, clearMinParticipants} = minParticipantsSlice.actions;

export default minParticipantsSlice.reducer;