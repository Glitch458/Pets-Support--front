import { createSlice } from '@reduxjs/toolkit';
import { friendsApi } from './friendsApi';

const initialState = {
  items: [],
};

export const friendsSlice = createSlice({
  name: 'friendsReducer',
  initialState,
  reducers: {
    newItems: (state, { payload }) => {
      state.items = payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      friendsApi.endpoints.getFriends.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );
  },
});

export const { newItems } = friendsSlice.actions;

export default friendsSlice.reducer;
