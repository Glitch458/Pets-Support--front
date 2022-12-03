import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-support.onrender.com/api/user',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().auth;

      headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['User'],

  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: `/current`,
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
    updateUserInfo: builder.mutation({
      query: () => ({
        url: `/update`,
        method: 'POST',
      }),
      providesTags: ['User'],
    }),
  }),
});
export const { useGetCurrentUserQuery, useUpdateUserInfoMutation} = userApi;
