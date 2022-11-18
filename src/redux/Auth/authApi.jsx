import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-support.onrender.com/api',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().auth;

      headers.set('Authorization', token);

      return headers;
    },
  }),

  tagTypes: ['User'],

  endpoints: builder => ({
    //useLoginMutation
    login: builder.mutation({
      query: payload => ({
        url: '/login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),

    //useLogoutMutation
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),

    //useRegisterMutation
    register: builder.mutation({
      query: payload => ({
        url: '/register',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),

    //useCurrentUserQuery
    currentUser: builder.query({
      query: () => ({
        url: '/current',
      }),
      providesTags: ['User'],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useCurrentUserQuery,
  useLogoutMutation,
} = authApi;
