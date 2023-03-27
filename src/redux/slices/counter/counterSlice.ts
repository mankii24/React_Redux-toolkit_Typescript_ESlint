import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { getUserList } from './counterService';
import { UserList, UserListAction, CounterState, Builder } from 'types/counter';

const initialState: CounterState = {
  value: 0,
  incrementAmount: 1,
  userList: [],
  isLoad: false,
};

const userSuccess = (
  state: { userList: UserList[] },
  action: UserListAction,
) => {
  console.log(action);
  state.userList = action.payload;
};

const Userpending = (state: { isLoad: boolean }) => {
  state.isLoad = true;
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.incrementAmount;
    },
    decrement: (state) => {
      state.value -= state.incrementAmount;
    },
    // changeIncrementAmount: (state, action: PayloadAction<number>) => {
    //   state.incrementAmount = action.payload
    // },
  },
  extraReducers: (builder: Builder) => {
    builder.addCase(getUserList.fulfilled, userSuccess);
    builder.addCase(getUserList.pending, Userpending);
    builder.addCase(getUserList.rejected, (state: { isLoad: boolean }) => {
      state.isLoad = false;
    });
  },
});

export const { increment, decrement } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;
export const userList = (state: RootState) => state.counter.userList;

export default counterSlice.reducer;
