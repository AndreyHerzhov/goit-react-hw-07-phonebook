import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter/filter-reducer';
import contactsReducer from "./contacts/contacts-sclice"

const store = configureStore({
    reducer: {
        contacts:  contactsReducer,
        filter: filterReducer,
    }
})


export default store;