import * as React from 'react';
import BoxFlexColumn from '../../components/BoxFlexColumn/BoxFlexColumn';
import { Button } from '../../components/Button/Button';
import { fetchTodos, Todo } from '../../api/fetchTodo';
import { ApiStatus } from '../../types.common';
import * as crypto from 'crypto';

const MSWExample: React.FC = () => {
  const [todos, setTodos] = React.useState<Todo[] | null>(null);
  const [apiStatus, setApiStatus] = React.useState<ApiStatus>('idle');
  const handleTodoFetch = async () => {
    try {
      setApiStatus('pending');
      const res = await fetchTodos();
      setTodos(res);
      setApiStatus('succeeded');
    } catch (e) {
      setApiStatus('failed');
    }
  };

  return (
    <BoxFlexColumn classNames="w-4/5 h-screen  m-auto">
      <Button
        onClick={handleTodoFetch}
        className="w-1/3 self-center"
        disabled={apiStatus === 'pending'}
      >
        Get TODOs
      </Button>
      {apiStatus === 'pending' && (
        <BoxFlexColumn classNames="pt-6">loading...</BoxFlexColumn>
      )}
      <BoxFlexColumn classNames="pt-6">
        {todos &&
          todos.map((todo) => (
            <BoxFlexColumn classNames="w-full" key={crypto.randomUUID()}>
              <div
                className="p-2 border-1 border-gray"
                key={crypto.randomUUID()}
              >
                {todo.title}
              </div>
            </BoxFlexColumn>
          ))}
      </BoxFlexColumn>
    </BoxFlexColumn>
  );
};
//</editor-fold>

export default MSWExample;
