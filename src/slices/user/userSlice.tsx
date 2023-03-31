import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import { User } from '../../interfaces/User';

export interface userState {
    users: User[]
};

const initialState: userState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
  },
});

export const { setUsers } = userSlice.actions;

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  dispatch( setUsers(data) )
};

export default userSlice.reducer;