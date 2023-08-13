/* eslint-disable @typescript-eslint/no-explicit-any */
import { rootReducer, RootState } from './index';
import { configureStore } from '@reduxjs/toolkit';

const getTestStore = (store: Partial<RootState>): unknown => {
  return configureStore({ reducer: rootReducer, preloadedState: store });
};

export default getTestStore;
