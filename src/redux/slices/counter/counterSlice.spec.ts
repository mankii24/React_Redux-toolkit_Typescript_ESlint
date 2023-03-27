import counterReducer, {
  increment,
  decrement,
  userSuccess,
  UserRejected,
} from './counterSlice';
import { CounterState } from 'types/counter';

describe('counter reducer', () => {
  const initialState: CounterState = {
    value: 0,
    incrementAmount: 1,
    userList: [],
    isLoad: false,
  };

  test('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      incrementAmount: 1,
      userList: [],
      isLoad: false,
    });
  });

  test('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(1);
  });
  test('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(-1);
  });

  test('should call userSuccess', () => {
    userSuccess(initialState, { payload: [{ id: 1 }] });
    expect(initialState.userList).toEqual([{ id: 1 }]);
  });

  test('should call UserRejected', () => {
    UserRejected(initialState);
    expect(initialState.isLoad).toEqual(false);
  });
});
