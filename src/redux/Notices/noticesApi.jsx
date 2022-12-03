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
      query: categoryName => ({
        url: `/${categoryName}`,
        method: 'GET',
      }),
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
    //useGetNoticeOwnerQuery
    getNoticeOwner: builder.query({
      query: noticeId => ({
        url: `/id/owner/${noticeId}`,
        method: 'GET',
      }),
      providesTags: ['Notices'],
    }),

    //useAddFavoriteNoticeMutation
    addFavoriteNotice: builder.mutation({
      query: noticeId => ({
        url: `/favorite/${noticeId}`,
        method: 'POST',
      }),
      invalidatesTags: ['Notices'],
    }),

    //useDeleteFavoriteNoticesMutation
    deleteFavoriteNotice: builder.mutation({
      query: noticeId => ({
        url: `/favorite/${noticeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notices'],
    }),

    //useAddNoticeMutation
    addNotice: builder.mutation({
      query: payload => ({
        url: `/`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Notices'],
    }),

    //useDeleteNoticesMutation
    deleteNotice: builder.mutation({
      query: noticeId => ({
        url: `/id/${noticeId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Notices'],
    }),
  }),
});
export const {
  useGetNoticeByIdQuery,
  useGetNoticeOwnerQuery,
  useGetNoticesByCategoryQuery,
  useAddFavoriteNoticeMutation,
  useDeleteFavoriteNoticeMutation,
  useAddNoticeMutation,
  useDeleteNoticeMutation,
} = noticesApi;
