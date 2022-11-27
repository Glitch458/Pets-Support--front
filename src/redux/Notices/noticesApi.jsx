import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const noticesApi = createApi({
  reducerPath: 'noticesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-support.onrender.com/api',
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
            url: `/notices/${categoryName}`,
            method: 'GET',
          };
        }
        if (categoryName === 'favorite') {
          return { url: `/user/favorite`, method: 'GET' };
        }
      },
      providesTags: ['Notices'],
    }),

    //useGetNoticeByIdQuery
    getNoticeById: builder.query({
      query: noticeId => ({
        url: `/notices/id/${noticeId}`,
        method: 'GET',
      }),
      providesTags: ['Notices'],
    }),

    //useAddFavoriteNoticeMutation
    addFavoriteNotice: builder.mutation({
      query: noticeId => ({
        url: `/user/favorite/${noticeId}`,
        method: 'POST',
      }),
      invalidatesTags: ['Notices'],
    }),

    //useDeleteNoticesMutation
    deleteFavoriteNotice: builder.mutation({
      query: noticeId => ({
        url: `/user/favorite/${noticeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notices'],
    }),
  }),
});
export const {
  useGetNoticeByIdQuery,
  useGetNoticesByCategoryQuery,
  useAddFavoriteNoticeMutation,
  useDeleteFavoriteNoticeMutation,
} = noticesApi;
