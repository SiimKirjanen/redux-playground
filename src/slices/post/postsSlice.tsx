import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store';
import { User } from '../../interfaces/User';
import { Post } from '../../interfaces/Post';

export interface state {
    errorMsg: string|undefined
    loading: boolean
};

const extraInitialState: state = {
  loading: false,
  errorMsg: ''
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  return data;
});

const postsAdapter = createEntityAdapter<Post>({
  selectId: (post) => post.id
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState({
    ...extraInitialState
  }),
  reducers: {
    removePost: (state, action: PayloadAction<number>) => {
      postsAdapter.removeOne(state, action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action.payload)
      postsAdapter.setAll(state, action.payload);
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.error.message;
    })
  },
});

export const { removePost } = postsSlice.actions;
export const { selectAll: selectAllPosts } = postsAdapter.getSelectors((state: RootState) => state.post);
export const isPostsLoading = (state: RootState) => state.post.loading;

export default postsSlice.reducer;