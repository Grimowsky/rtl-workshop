import ReduxExample from '../ReduxExample';
import { screen } from '@testing-library/react';
import { renderWithStore } from '../../../testUtils/render.store.helper';

describe('ReduxExampleTests', () => {
  it('handles decrease when user click decrement button', async () => {
    const { user } = renderWithStore(<ReduxExample />);

    expect(screen.getByText(/current count: 0/i)).toBeInTheDocument();
    await user.click(screen.getByText(/decrement/i));
    expect(screen.getByText(/current count: -1/i)).toBeInTheDocument();
  });
  it('handles increase when user click increase button', async () => {
    const { user } = renderWithStore(<ReduxExample />);

    expect(screen.getByText(/current count: 0/i)).toBeInTheDocument();
    await user.click(screen.getByText(/increment/i));
    expect(screen.getByText(/current count: 1/i)).toBeInTheDocument();
  });
  it('it is just to show how to mock store initial value', () => {
    renderWithStore(<ReduxExample />, {}, { counter: { value: 2137 } });
    expect(screen.getByText(/current count: 2137/i)).toBeInTheDocument();
  });
});
