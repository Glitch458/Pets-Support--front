import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-support.onrender.com/api/auth/',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().auth;

      headers.set('Authorization', token);

      return headers;
    },
  }),

  tagTypes: ['Auth'],

  endpoints: builder => ({
    //useRegisterMutation
    register: builder.mutation({
      query: payload => ({
        url: '/register',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Auth'],
    }),

    //useLoginMutation
    login: builder.mutation({
      query: payload => ({
        url: '/login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Auth'],
    }),

    //useLogoutMutation
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),

    //useCurrentUserQuery
    currentUser: builder.mutation({
      query: () => ({
        url: '/current',
      }),
      providesTags: ['Auth'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useCurrentUserQuery,
} = authApi;
