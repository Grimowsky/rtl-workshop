import * as React from 'react';
import { Route } from 'react-router-dom';
import { store } from '../store';
import { Provider } from 'react-redux';
import ReduxExample from '../pages/ReduxExample/ReduxExample';
export const createReduxExampleRoutes = () => {
  return (
    <>
      <Route index={true} path={'/redux'} element={<>hello redux example</>} />
      <Route
        path={'redux/example'}
        element={
          <Provider store={store}>
            <ReduxExample />
          </Provider>
        }
      />
    </>
  );
};
