import { createSlice } from '@reduxjs/toolkit';

export interface IAuthState {
    email: string;
}

const initialState: IAuthState = {
    email: '@Gfdgdfgfd'
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setEmail: (state, { payload }) => {
            state.email = payload;
        }
    }
});

export const { setEmail } = authSlice.actions;

export const authReducer = authSlice.reducer;
