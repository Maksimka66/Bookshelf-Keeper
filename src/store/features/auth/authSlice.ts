import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { IAuthState } from '@/types/authTypes/authTypes';

const initialState: IAuthState = {
    isRegistered: false,
    token: '',
    refreshToken: '',
    sid: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    selectors: {
        selectIsRegistered: (state) => state.isRegistered,
        selectToken: (state) => state.token,
        selectRefreshedToken: (state) => state.refreshToken,
        selectSid: (state) => state.sid
    },
    reducers: {
        clearToken: (state) => {
            state.isRegistered = false;
            state.token = null;
            state.refreshToken = null;
        },
        savedToken: (state, { payload }) => {
            state.isRegistered = true;
            state.token = payload.newAccessToken;
            state.refreshToken = payload.newRefreshToken;
            state.sid = payload.newSid;
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => {
            console.log('My user', payload);

            state.isRegistered = true;
        });

        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.isRegistered = true;
            state.token = payload.accessToken;
            state.refreshToken = payload.refreshToken;
            state.sid = payload.sid;
        });

        builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
            state.isRegistered = false;
            state.token = null;
            state.refreshToken = null;
        });
    }
});

export const { selectIsRegistered, selectToken, selectRefreshedToken, selectSid } =
    authSlice.selectors;

export const { clearToken, savedToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
