import { RootState } from '@/store/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
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
        register: builder.mutation({
            query: (data) => ({
                url: '/auth/register',
                method: 'POST',
                body: data
            })
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/auth/login',
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST'
            })
        }),
        refresh: builder.mutation({
            query: (data) => ({
                url: '/auth/refresh',
                method: 'POST',
                body: data
            })
        }),
        google: builder.mutation({
            query: () => ({
                url: '/auth/google',
                method: 'GET'
            })
        })
    })
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useRefreshMutation,
    useGoogleMutation
} = authApi;
