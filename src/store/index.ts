import { configureStore, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import counterReducer from './slice/counter.slice';

export const rootReducer = {
  counter: counterReducer,
};
export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch<T> = ThunkDispatch<T, never, AnyAction>;
