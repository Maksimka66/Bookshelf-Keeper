import { createSlice } from '@reduxjs/toolkit';

interface IOptionsState {
    isModalFirstOpen: boolean;
}

const initialState: IOptionsState = {
    isModalFirstOpen: true
};

export const optionsSlice = createSlice({
    name: 'options',
    initialState,
    selectors: { selectIsModalFirstOpen: (state) => state.isModalFirstOpen },
    reducers: {
        closeModal: (state, { payload }) => {
            state.isModalFirstOpen = payload;
        }
    }
});

export const { selectIsModalFirstOpen } = optionsSlice.selectors;

export const { closeModal } = optionsSlice.actions;

export const optionsReducer = optionsSlice.reducer;
