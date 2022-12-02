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
    updateUserInfo: (state, { payload }) => {
      state.currentUser = [...state.currentUser, payload];
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.getCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.currentUser = [...state.currentUser, payload];
      }
    );
    builder.addMatcher(
      userApi.endpoints.updateUserInfo.matchFulfilled,
      (state, { payload }) => {
        state.currentUser = payload;
      }
    );
  },
});

export const { getCurrentUser, updateUserInfo } = userSlice.actions;

export default userSlice.reducer;
