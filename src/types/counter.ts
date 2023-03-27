import { Meta } from './global';

export interface UserList {
  id: number;
}

export interface UserListAction {
  type?: string;
  payload: UserList[];
  meta?: Meta;
}

export interface CounterState {
  value: number;
  incrementAmount: number;
  userList: UserList[];
  isLoad: boolean;
}

export interface Builder {
  addCase: (
    typeOrActionCreator: unknown,
    reducer: (state: CounterState, action: UserListAction) => void,
  ) => void;
}
