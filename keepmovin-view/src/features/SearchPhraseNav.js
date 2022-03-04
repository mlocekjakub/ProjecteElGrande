import React from 'react';
import {createSlice} from "@reduxjs/toolkit";


const initialStateValue = "";
export const SearchPhraseNavSlice = createSlice({
    name: "searchPhraseNav",
    initialState: {value: initialStateValue},
    reducers: {
        changeSearchPhrase: (state, action) => {
            state.value = action.payload
        },
        clearSearchPhrase: (state, action) => {
            state.value = initialStateValue
        },
    },
});


export const {changeSearchPhrase, clearSearchPhrase} = SearchPhraseNavSlice.actions;

export default SearchPhraseNavSlice.reducer;