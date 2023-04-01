import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../../store';
import { User } from '../../interfaces/User';

export interface userState {
    users: User[],
    loading: boolean
};

const initialState: userState = {
  users: [],
  loading: false
};

export const userSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
      state.loading = false
    },
    setLoading: (state) => {
      state.loading = true;
    }
  },
});

export const { setUsers, setLoading } = userSlice.actions;

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  dispatch( setLoading() );
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  dispatch( setUsers(data) );
};

export default userSlice.reducer;