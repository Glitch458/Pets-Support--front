import { createSlice } from '@reduxjs/toolkit';
import { noticesApi } from './noticesApi';

const initialState = {
  items: [],
  favoriteNotices: [],
};

export const noticesSlice = createSlice({
  name: 'noticesReducer',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoriteNotices = [...state.favoriteNotices, payload];
    },
    renewItems: (state, { payload }) => {
      state.items = payload;
    },
  },

  extraReducers: builder => {
    //getNoticesByCategory
    builder.addMatcher(
      noticesApi.endpoints.getNoticesByCategory.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );

    //getNoticesById
    builder.addMatcher(
      noticesApi.endpoints.getNoticeById.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );

    //addFavoriteNotice
    builder.addMatcher(
      noticesApi.endpoints.addFavoriteNotice.matchRejected,
      (state, { payload }) => {
        state.favoriteNotices = [...state.favoriteNotices, payload];
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

export const { renewItems, addFavorite } = noticesSlice.actions;

export default noticesSlice.reducer;
