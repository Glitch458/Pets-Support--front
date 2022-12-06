import { createSlice } from '@reduxjs/toolkit';

import { authApi } from './authApi';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'authReducer',
  initialState,
  extraReducers: builder => {
    //Registration
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      }
    );

    //Login
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      }
    );

    //Logout
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = initialState.isLoggedIn;
    });

    //currentUser Success
    builder.addMatcher(
      authApi.endpoints.currentUser.matchFulfilled,
      (state, { payload }) => {
        state.name = payload.name;
        state.email = payload.email;
      }
    );

    //currentUser Error
    builder.addMatcher(
      authApi.endpoints.currentUser.matchRejected,
      (state, { payload }) => {
        if (!payload) {
          return;
        }
        if (payload.status === 401) {
          state.token = '';
        }
      }
    );
  },
});

export default authSlice.reducer;
