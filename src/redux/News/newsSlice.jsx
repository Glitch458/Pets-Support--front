import { createSlice } from '@reduxjs/toolkit';
import { newsApi } from './newsApi';

const initialState = {
  items: [],
};

export const newsSlice = createSlice({
  name: 'newsReducer',
  initialState,
  reducers: {
    renewItems: (state, { payload }) => {
      state.items = payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      newsApi.endpoints.getNews.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );
  },
});

export const { renewItems } = newsSlice.actions;

export default newsSlice.reducer;
