import { createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContact, removeContact } from "./contacts-operations";

const initialState = {
        items:[],
        loading: false,
        error: null,
        filter: ''
    }

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (store) => {
            store.error = null
            store.loading = true
        },
        [fetchContacts.fulfilled]: (store, {payload}) => {
            store.items = payload
            store.loading = false
        },
        [fetchContacts.rejected]: (store, {payload}) =>  {
            store.error = payload
            store.loading = false
        },
        [addContact.pending]: (store) => {
            store.loading = true
            store.error = null
        },
        [addContact.fulfilled]: (store, {payload}) => {
            store.loading = false
            store.items = [...store.items, payload]
        },
        [addContact.rejected]: (store, {payload}) => {
            store.loading = false
            store.error = payload
        },
        [removeContact.fulfilled]: (store, {payload}) => {
            store.items = store.items.filter(item => item.id !== payload)
            store.loading = false
        },
        [removeContact.pending]: (store, {payload}) => {
            store.loading = true
            store.error = null
        },
        [removeContact.rejected]: (store, {payload}) => {
            store.error = payload
            store.loading = false
        },
            
    },
    reducers: {
        setFilter: (store, {payload}) => {
            store.filter = payload
         },
    },
})

export const { setFilter } = contactsSlice.actions
export default contactsSlice.reducer

 