import axios from 'axios';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export const fetchTodos = async (): Promise<Todo[]> => {
  const result = await axios.get<Todo[]>(
    `https://jsonplaceholder.typicode.com/todos`,
  );

  return result.data;
};
