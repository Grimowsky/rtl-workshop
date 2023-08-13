import * as React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { store } from '../store';
import { Provider } from 'react-redux';
export const createReduxExampleRoutes = () => {
  return (
    <>
      <Route index={true} path={'/redux'} element={<>hello redux example</>} />
      <Route
        path={'redux/example'}
        element={
          <Provider store={store}>
            <>redux testing example</>
          </Provider>
        }
      />
    </>
  );
};
