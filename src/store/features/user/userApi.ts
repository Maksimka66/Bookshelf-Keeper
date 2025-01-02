import { RootState } from '@/store/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
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
        userInfo: builder.query({
            query: () => '/user/books'
        })
    })
});

export const { useUserInfoQuery } = userApi;
