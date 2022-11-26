import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'noticesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-support.onrender.com/api/notices',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().auth;

      headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Notices'],

  endpoints: builder => ({
    //useGetNoticesByCategoryQuery
    getNoticesByCategory: builder.query({
      query: categoryName => {
        if (
          categoryName === 'sell' ||
          categoryName === 'lost-found' ||
          categoryName === 'for-free' ||
          categoryName === 'own'
        ) {
          return {
            url: `/${categoryName}`,
            method: 'GET',
          };
        }
        if (categoryName === 'favorite') {
          return { url: `/favorite`, method: 'GET' };
        }
      },
      providesTags: ['Notices'],
    }),

    //useGetNoticeByIdQuery
    getNoticeById: builder.query({
      query: noticeId => ({
        url: `/id/${noticeId}`,
        method: 'GET',
      }),
      providesTags: ['Notices'],
    }),

    //useAddFavoriteNoticeMutation
    addFavoriteNotice: builder.mutation({
      query: noticeId => ({
        url: `/id/${noticeId}`,
        method: 'POST',
      }),
      invalidatesTags: ['Notices'],
    }),

    //useGetFavoriteNoticeQuery
    // getFavoriteNotice: builder.query({
    //   query: userId => ({
    //     url: `/ads/${userId}`,
    //     method: 'GET',
    //   }),
    //   providesTags: ['Notices'],
    // }),

    //useDeleteNoticesMutation
    // deleteNotices: builder.mutation({
    //   query: id => ({
    //     url: `/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['Notices'],
    // }),
  }),
});
export const {
  // useGetNoticesQuery,
  useGetNoticeByIdQuery,
  useGetNoticesByCategoryQuery,
  useAddFavoriteNoticeMutation,
  //useGetFavoriteNoticeQuery,
  //useDeleteNoticesMutation,
} = noticesApi;
