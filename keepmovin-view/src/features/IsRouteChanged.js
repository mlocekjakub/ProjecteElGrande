import React from 'react';
import {createSlice} from "@reduxjs/toolkit";


const initialStateValue = false;
export const IsRouteChangedSlice = createSlice({
    name: "IsRouteChanged",
    initialState: {value: initialStateValue},
    reducers: {
        changeIsRouteChanged: (state, action) => {
            state.value = action.payload
        },
    },
});


export const {changeIsRouteChanged} = IsRouteChangedSlice.actions;

export default IsRouteChangedSlice.reducer;