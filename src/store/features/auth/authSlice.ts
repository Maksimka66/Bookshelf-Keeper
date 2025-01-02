import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { IAuthState } from '@/types/authTypes/authTypes';

const initialState: IAuthState = {
    user: {
        name: '',
        email: ''
    },
    token: '',
    isLoggedIn: false,
    isRefreshing: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    selectors: {
        selectUser: (state) => state.user,
        selectToken: (state) => state.token,
        selectIsLoggedIn: (state) => state.isLoggedIn,
        selectIsRefreshing: (state) => state.isRefreshing
    },
    reducers: {
        clearToken: (state) => {
            state.token = '';
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => {
            state.isLoggedIn = true;
            state.user.name = payload.name;
            state.user.email = payload.email;
        });

        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.token = payload.accessToken;
            state.isLoggedIn = true;
            state.user.name = payload.userData.name;
            state.user.email = payload.userData.email;
        });

        builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
            state.user.name = null;
            state.user.email = null;
            state.token = null;
            state.isLoggedIn = false;
        });
    }
});

export const { selectUser, selectToken, selectIsLoggedIn, selectIsRefreshing } =
    authSlice.selectors;

export const { clearToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
