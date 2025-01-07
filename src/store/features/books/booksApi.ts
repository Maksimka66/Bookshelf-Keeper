import { baseQueryWithReauth } from '@/store/baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery: baseQueryWithReauth,
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
