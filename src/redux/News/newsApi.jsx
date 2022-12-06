import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-support.onrender.com/api',
  }),
  tagTypes: ['News'],
  endpoints: builder => ({
    getNews: builder.query({
      query: () => `/news`,
      providesTags: ['News'],
    }),
  }),
});
export const { useGetNewsQuery } = newsApi;
