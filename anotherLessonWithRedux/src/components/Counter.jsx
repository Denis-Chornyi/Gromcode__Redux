import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementAsync } from '../state/counter/counterSlice';

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync(10))}>Increment Async by 10</button>
    </div>
  );
};

export default Counter;
