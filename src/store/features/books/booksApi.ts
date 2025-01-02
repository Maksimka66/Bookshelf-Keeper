import { RootState } from '@/store/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://bookread-backend.goit.global',
        prepareHeaders: (headers: Headers, { getState }) => {
            const state = getState() as RootState;
            const token = state.auth.token;

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        }
    }),
    endpoints: (builder) => ({
        addBook: builder.mutation({
            query: (data) => ({
                url: '/book',
                method: 'POST',
                body: data
            })
        }),
        deleteBook: builder.mutation({
            query: (data) => ({
                url: `/book/${data.id}`,
                method: 'DELETE'
            })
        }),
        addReview: builder.mutation({
            query: (data) => ({
                url: `/book/review/${data.id}`,
                method: 'PATCH'
            })
        })
    })
});

export const { useAddBookMutation, useDeleteBookMutation, useAddReviewMutation } = booksApi;
