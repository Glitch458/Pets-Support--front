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
    getFavorite: (state, { payload }) => {
      state.favoriteNotices = payload;
    },
    addFavorite: (state, { payload }) => {
      state.favoriteNotices = [...state.favoriteNotices, payload];
    },
    deleteFavorite: (state, { payload }) => {
      state.favoriteNotices = state.favoriteNotices.filter(
        item => item !== payload
      );
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
      noticesApi.endpoints.getNoticeById.matchFulfilled
      // (state, { payload }) => {
      //   state.items = payload;
      // }
    );
    builder.addMatcher(
      noticesApi.endpoints.getNoticeOwner.matchFulfilled
      // (state, { payload }) => {
      //   state.items = payload;
      // }
    );

    //addFavoriteNotice
    builder.addMatcher(noticesApi.endpoints.addFavoriteNotice.matchFulfilled);

    //deleteFavoriteNotices
    builder.addMatcher(
      noticesApi.endpoints.deleteFavoriteNotice.matchFulfilled
    );

    //addNotices
    builder.addMatcher(
      noticesApi.endpoints.addNotice.matchFulfilled
      // (state, { payload }) => {
      //   state.items = [...state.items, payload];
      // }
    );
  },
});

export const { renewItems, getFavorite, addFavorite, deleteFavorite } =
  noticesSlice.actions;

export default noticesSlice.reducer;
