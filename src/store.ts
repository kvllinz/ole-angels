import { configureStore, combineReducers } from '@reduxjs/toolkit';
import commonReducer from './commonSlice';

const rootReducer = combineReducers({
  reducer: commonReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
