import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'noticesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-support.onrender.com',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;

      headers.set('Authorization', token);

      return headers;
    },
  }),
  tagTypes: ['Notices'],
  endpoints: builder => ({
    //useGetNoticesQuery
    getNotices: builder.query({
      query: () => ``,
      providesTags: ['Notices'],
    }),
    //useGetNoticesByCategoryQuery
    getNoticesByCategory: builder.query({
      query: categoryName => ({
        url: `/${categoryName}`,
        method: 'GET',
      }),
      providesTags: ['Notices'],
    }),
    //useAddNoticesMutation
    addNotices: builder.mutation({
      query: payload => ({
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Notices'],
    }),
    //useDeleteNoticesMutation
    deleteNotices: builder.mutation({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notices'],
    }),
  }),
});
export const {
  useGetNoticesQuery,
  useGetNoticesByCategoryQuery,
  useAddNoticesMutation,
  useDeleteNoticesMutation,
} = noticesApi;