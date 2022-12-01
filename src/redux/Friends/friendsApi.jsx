import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const friendsApi = createApi({
    reducerPath: 'friendsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pets-support.onrender.com/api',
    }),
        tagTypes: ['Friends'],
        endpoints: builder => ({
        getFriends: builder.query({
        query: () => `/friends`,
        providesTags: ['Friends'],
        }),
    }),
});

   
export const {useGetFriends} = friendsApi;
