import * as React from 'react';
import BoxFlexColumn from '../../components/BoxFlexColumn/BoxFlexColumn';
import BoxFlexRow from '../../components/BoxFlexRow/BoxFlexRow';
import { Button } from '../../components/Button/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { decrement, increment } from '../../store/slice/counter.slice';

const ReduxExample: React.FC = () => {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <BoxFlexColumn classNames="w-4/5 h-screen justify-center m-auto">
      <BoxFlexRow classNames="w-full place-content-around">
        <Button onClick={handleDecrement}>Decrement</Button>
        <div className="font-bold flex items-center">{`Current count: ${value}`}</div>
        <Button onClick={handleIncrement}>Increment</Button>
      </BoxFlexRow>
    </BoxFlexColumn>
  );
};

export default ReduxExample;
