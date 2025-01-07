import { baseQueryWithReauth } from '@/store/baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        userInfo: builder.query({
            query: () => '/user/books'
        })
    })
});

export const { useUserInfoQuery, useLazyUserInfoQuery } = userApi;
