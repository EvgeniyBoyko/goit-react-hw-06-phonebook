import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './actions';


const contacts = createReducer([], {
    [addContact]: (state, {payload}) => [...state, payload],
    [deleteContact]: (state, {payload}) => state.filter(({ name }) =>
        name !== payload),
});

const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload,
});


export default combineReducers({
    contacts,
    filter
});