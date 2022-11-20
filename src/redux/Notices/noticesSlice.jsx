import { createSlice } from '@reduxjs/toolkit';
import { noticesApi } from './noticesApi';

const initialState = {
  items: [],
};

export const noticesSlice = createSlice({
  name: 'noticesReducer',
  initialState,
  reducers: {
    // removeItems: state => {
    //   state.items = initialState.items;
    // },
    // addItems: (state, { payload }) => {
    //   state.items = [...state.items, payload];
    // },
    renewItems: (state, { payload }) => {
      state.items = payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      noticesApi.endpoints.getNoticesByCategory.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );
    builder.addMatcher(
      noticesApi.endpoints.getNoticesById.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );
    //addNotices
    // builder.addMatcher(
    //   noticesApi.endpoints.addNotices.matchFulfilled,
    //   (state, { payload }) => {
    //     state.items = [...state.items, payload];
    //   }
    // );
  },
});

export const { renewItems } = noticesSlice.actions;

export default noticesSlice.reducer;
