import store, { RootState } from '../../app/store';
import { contactAdapter } from './contactSlice';

// Can create a set of memoized selectors based on the location of this entity state
export const contactSelectors = contactAdapter.getSelectors<RootState>(
  (state) => state.contacts
);

// And then use the selectors to retrieve values
export const allContacts = contactSelectors.selectAll(store.getState());
