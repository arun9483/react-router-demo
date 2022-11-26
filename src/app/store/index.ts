import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import contactReducer from './../../feature/contact/contactSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
