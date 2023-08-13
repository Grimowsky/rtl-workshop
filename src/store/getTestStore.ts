/* eslint-disable @typescript-eslint/no-explicit-any */
import { rootReducer } from './index';
import { configureStore } from '@reduxjs/toolkit';

const getTestStore = (store: any): unknown => {
  return configureStore({ reducer: rootReducer, preloadedState: store });
};

export default getTestStore;
