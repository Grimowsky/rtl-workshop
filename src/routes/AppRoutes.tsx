import { routes } from './routes.schema';
import { Route, Routes } from 'react-router-dom';
import { NavigateTest } from '../components/NavigateTest/NavigateTest';

export const AppRoutes = (): React.ReactElement => {
  return (
    <Routes>
      <Route path={routes.BASE_ROUTE} element={<>hello there</>} />
      <Route path={'/hello'} element={<NavigateTest />} />
    </Routes>
  );
};
