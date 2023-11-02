import {configureStore} from '@reduxjs/toolkit';
import {UserReducer} from './slices/UserSlice/UserSlice.slice';

const store = configureStore({
  reducer: UserReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
