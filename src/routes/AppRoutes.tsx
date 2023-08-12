import { routes } from './routes.schema';
import { Route, Routes } from 'react-router-dom';
import { NavigateTest } from '../components/NavigateTest/NavigateTest';

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
      <Route path={'/navigateTest'} element={<NavigateTest />} />
      <Route path={'/elsewhere'} element={<>hello there</>} />
    </Routes>
  );
};
