import React, { useEffect, type FC } from 'react';
import { useAppSelector, useAppDispatch } from 'types/hooks';
import {
  decrement,
  increment,
  // changeIncrementAmount,
  selectCount,
  userList,
} from 'redux/slices/counter/counterSlice';
import './Counter.scss';
import { getUserList } from 'redux/slices/counter/counterService';
import LABELS from 'app/labels';

const Counter: FC = () => {
  const count = useAppSelector(selectCount);
  const usr = useAppSelector(userList);
  const dispatch = useAppDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');
  // const incrementValue = Number(incrementAmount) || 0;

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  const testEnv = process.env.REACT_APP_API_URL;
  const testEnv1 = process.env.REACT_APP_ENV;

  console.log('usr----->', usr);
  console.log('labels--->', LABELS.counter.text);

  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>{count}</span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>

      <div className="test1">testtest</div>

      <h1>heading</h1>

      <ul>
        <li>ul li test</li>
      </ul>

      <div className="test">
        <span>{testEnv}</span>
        <span>{testEnv1}</span>
      </div>

      {/* <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() => dispatch(changeIncrementAmount(incrementValue))}
        >
          Add Amount
        </button>
      </div> */}
    </div>
  );
};

export default Counter;
