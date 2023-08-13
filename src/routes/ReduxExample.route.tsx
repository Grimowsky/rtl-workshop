import { Route } from 'react-router-dom';
import { NavigateTest } from '../pages/NavigateTest/NavigateTest';

export const createReduxExampleRoutes = () => {
  return (
    <>
      <Route path={'/navigateTest'} element={<NavigateTest />} />
      <Route path={'/elsewhere'} element={<>hello there</>} />
    </>
  );
};
