import { createSlice } from '@reduxjs/toolkit';

import { authApi } from './authApi';

const initialState = {
  name: '',
  email: '',
  token: '',
};

export const filterSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //Login
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;

        state.name = user.name;
        state.email = user.email;
        state.token = token;
      }
    );

    //Logout
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, state => {
      state.token = initialState.token;
      state.name = initialState.name;
      state.email = initialState.email;
    });

    //Registration
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;

        state.name = user.name;
        state.email = user.email;
        state.token = token;
      }
    );

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

export default filterSlice.reducer;
