import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Contact } from './types';

export const contactAdapter = createEntityAdapter<Contact>({
  // Keep the "all IDs" array sorted based on contact name
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactAdapter.getInitialState(),
  reducers: {
    // Can pass adapter functions directly as case reducers.  Because we're passing this
    // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
    addContact: contactAdapter.addOne,
    updateContact: contactAdapter.upsertOne,
    removeContact: contactAdapter.removeOne,
  },
});

export const { addContact, updateContact, removeContact } =
  contactSlice.actions;

export default contactSlice.reducer;
