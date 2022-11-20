import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const noticesApi = createApi({
  reducerPath: "noticesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://pets-support.onrender.com/api",
    prepareHeaders: (headers, { getState }) => {
      const { token = "" } = getState().auth;

      headers.set("Authorization", token);

      return headers;
    },
  }),
  tagTypes: ["Notices"],
  endpoints: (builder) => ({
    // //useGetNoticesQuery
    // getNotices: builder.query({
    //   query: () => `/`,
    //   providesTags: ['Notices'],
    // }),
    //useGetNoticesByCategoryQuery
    getNoticesByCategory: builder.query({
      query: (categoryName) => ({
        url: `/notices/${categoryName}`,
        method: "GET",
      }),
      providesTags: ["Notices"],
    }),
    //useGetNoticesByIdQuery
    getNoticesById: builder.query({
      query: (noticeId) => ({
        url: `/notices/id/${noticeId}`,
        method: "GET",
      }),
      providesTags: ["Notices"],
    }),
    //useAddNoticesMutation
    // addNotices: builder.mutation({
    //   query: payload => ({
    //     method: 'POST',
    //     body: payload,
    //   }),
    //   invalidatesTags: ['Notices'],
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
  useGetNoticesByIdQuery,
  useGetNoticesByCategoryQuery,
  //useAddNoticesMutation,
  //useDeleteNoticesMutation,
} = noticesApi;
