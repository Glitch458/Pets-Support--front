import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    getCurrentUser: (state, { payload }) => {
      state.currentUser = payload;
    },
  },
  extraReducers: builder => {
    //getNoticesByCategory
    builder.addMatcher(
      userApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.currentUser = payload;
      }
    );
  },
});

export const { getCurrentUser } = userSlice.actions;

export default userSlice.reducer;
