import { routes } from './routes.schema';
import { Route, Routes } from 'react-router-dom';
import { NavigateTest } from '../pages/NavigateTest/NavigateTest';
import { createReduxExampleRoutes } from './ReduxExample.route';
import { createNavigateExampleRoutes } from './NavigateExample.route';

export const AppRoutes = (): React.ReactElement => {
  return (
    <Routes>
      <Route
        path={routes.BASE_ROUTE}
        element={
          <h1 className="text-3xl font-bold underline text-center bg-primary-color">
            Hello world!
          </h1>
        }
      />
      {createReduxExampleRoutes()}
      {createNavigateExampleRoutes()}
    </Routes>
  );
};
