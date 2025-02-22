import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './userApi';
import { IUserState } from '@/types/userTypes/userTypes';

const initialState: IUserState = {
    name: '',
    email: '',
    goingToRead: [],
    currentlyReading: [],
    finishedReading: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    selectors: {
        selectUserName: (state) => state.name,
        selectUserEmail: (state) => state.email,
        selectGoingToRead: (state) => state.goingToRead,
        selectCurrentlyReading: (state) => state.currentlyReading,
        selectFinishedReading: (state) => state.finishedReading
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(userApi.endpoints.userInfo.matchFulfilled, (state, { payload }) => {
            console.log(payload);

            state.name = payload.name;
            state.email = payload.email;
            state.goingToRead = payload.goingToRead;
            state.currentlyReading = payload.currentlyReading;
            state.finishedReading = payload.finishedReading;
        });
    }
});

export const {
    selectUserName,
    selectUserEmail,
    selectGoingToRead,
    selectCurrentlyReading,
    selectFinishedReading
} = userSlice.selectors;

export const userReducer = userSlice.reducer;
