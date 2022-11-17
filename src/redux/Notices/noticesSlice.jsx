import { createSlice } from '@reduxjs/toolkit';
import { noticesApi } from './noticesApi';

const initialState = {
  items: [],
};

export const noticesSlice = createSlice({
  name: 'noticesReducer',
  initialState,
  reducers: {
    removeItems: state => {
      state.items = initialState.items;
    },
    addItems: (state, { payload }) => {
      state.items = [...state.items, payload];
    },
  },
  extraReducers: builder => {
    //getNotices
    builder.addMatcher(
      noticesApi.endpoints.getNotices.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );
    //addNotices
    builder.addMatcher(
      noticesApi.endpoints.addNotices.matchFulfilled,
      (state, { payload }) => {
        state.items = [...state.items, payload];
      }
    );
  },
});

export const { removeItems, addItems } = noticesSlice.actions;

export default noticesSlice.reducer;
