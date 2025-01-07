// import { createSlice } from '@reduxjs/toolkit';
// import { booksApi } from './booksApi';

// type initialState = {
//     lastBook: string;
// };

// const initialState: initialState = {
//     lastBook: ''
// };

// export const booksSlice = createSlice({
//     name: 'books',
//     initialState,
//     selectors: {
//         selectLastBook: (state) => state.lastBook
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addMatcher(booksApi.endpoints.addBook.matchFulfilled, (state, { payload }) => {
//             state.lastBook = payload.title;
//         });
//     }
// });

// export const { selectLastBook } = booksSlice.selectors;

// export const booksReducer = booksSlice.reducer;
