import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
export const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
