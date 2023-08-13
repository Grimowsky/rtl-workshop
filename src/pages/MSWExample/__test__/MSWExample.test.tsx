import MSWExample from '../MSWExample';
import { renderWithBrowser } from '../../../testUtils/render.helper';
import { rest } from 'msw';
import { SetupServer, setupServer } from 'msw/node';
import { Todo } from '../../../api/fetchTodo';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';

const mock_response: Todo[] = [
  {
    userId: 1,
    id: 1,
    title: 'mocked msw response',
    completed: false,
  },
];

const handlers = [
  rest.get(
    'https://jsonplaceholder.typicode.com/todos',
    async (_req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(500), ctx.json(mock_response));
    },
  ),
];

const errorHandlers = [
  rest.get(
    'https://jsonplaceholder.typicode.com/todos',
    async (_req, res, ctx) => {
      return res(ctx.status(500), ctx.json({ error: 'some error' }));
    },
  ),
];

const server: SetupServer = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('MSWExample tests', () => {
  it('Disables get todos button when querying api', async () => {
    const { user } = renderWithBrowser(<MSWExample />);

    await user.click(screen.getByText(/get todos/i));

    expect(screen.getByText(/get todos/i)).toBeDisabled();

    await waitForElementToBeRemoved(screen.queryByText(/loading.../i));

    expect(screen.getByText(/get todos/i)).toBeEnabled();
  });
  it('Loads data on button click', async () => {
    const { user } = renderWithBrowser(<MSWExample />);
    await user.click(screen.getByText(/get todos/i));

    await waitForElementToBeRemoved(screen.queryByText(/loading.../i));

    expect(screen.getByText(/mocked msw response/i)).toBeInTheDocument();
  });
  it('handles api error', async () => {
    server.resetHandlers(...errorHandlers);
    const { user } = renderWithBrowser(<MSWExample />);
    await user.click(screen.getByText(/get todos/i));

    expect(screen.getByText(/error.../i)).toBeInTheDocument();
  });
});
