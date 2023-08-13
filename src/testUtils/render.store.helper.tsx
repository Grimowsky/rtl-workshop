import { render, RenderResult } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import { UserEvent } from '@testing-library/user-event/setup/setup';
import { Provider } from 'react-redux';
import getTestStore from '../store/getTestStore';
import { Store } from '@reduxjs/toolkit';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { RootState } from '../store';

interface RenderWithStoreReturn {
  renderResult: RenderResult;
  history: MemoryHistory;
  user: UserEvent;
}
export const renderWithStore = (
  ui: JSX.Element,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {},
  state = {} as Partial<RootState>,
): RenderWithStoreReturn => {
  return {
    renderResult: render(
      <Provider store={getTestStore(state) as Store}>
        <Router location={history.location} navigator={history}>
          {ui}
        </Router>
      </Provider>,
    ),
    history,
    user: userEvent.setup(),
  };
};
