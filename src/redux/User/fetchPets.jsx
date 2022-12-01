import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const petsApi = createApi({
  reducerPath: 'petsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pets-support.onrender.com/api/user',
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.users.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Pets'],
  endpoints: builder => ({
    getUserPets: builder.query({
      query: () => '/pets',
      providesTags: ['Pets'],
    }),
    postPet: builder.mutation({
      query: payload => ({
        url: '/pets',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Pets'],
    }),
    updatePet: builder.mutation({
      query: ({ _id, ...payload }) => ({
        url: `/pets/${_id}`,
        method: 'PATCH',
        body: { ...payload },
      }),
      invalidatesTags: ['Pets'],
    }),
    deletePet: builder.mutation({
      query: id => ({
        url: `/pets/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Pets'],
    }),
  }),
});

export const {
  useGetUserPetsQuery,
  usePostPetMutation,
  useUpdatePetMutation,
  useDeletePetMutation,
} = petsApi;
