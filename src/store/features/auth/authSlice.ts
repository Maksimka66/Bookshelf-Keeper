import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';
import { IAuthState } from '@/types/authTypes/authTypes';

const initialState: IAuthState = {
    user: {
        name: '',
        email: '',
        currentlyReading: [],
        finishedReading: [],
        goingToRead: []
    },
    token: '',
    isLoggedIn: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    selectors: {
        selectUser: (state) => state.user,
        selectToken: (state) => state.token,
        selectIsLoggedIn: (state) => state.isLoggedIn
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => {
            console.log(payload);
            state.isLoggedIn = true;
            state.user.name = payload.name;
            state.user.email = payload.email;
        });

        builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            console.log(payload);
            state.token = payload.accessToken;
            state.isLoggedIn = true;
            state.user.name = payload.userData.name;
            state.user.email = payload.userData.email;
            state.user.currentlyReading = payload.userData.currentlyReading;
            state.user.finishedReading = payload.userData.finishedReading;
            state.user.goingToRead = payload.userData.goingToRead;
        });

        builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
            state.token = '';
            state.isLoggedIn = false;
        });
    }
});

// export const { setEmail } = authSlice.actions;

export const { selectToken } = authSlice.selectors;

export const authReducer = authSlice.reducer;
