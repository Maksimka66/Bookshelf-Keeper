import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './features/auth/authSlice';
import { optionsReducer } from './features/options/optionsSlice';
import { authApi } from './features/auth/authApi';
import { userApi } from './features/user/userApi';
import { booksApi } from './features/books/booksApi';
import { userReducer } from './features/user/userSlice';
// import { booksReducer } from './features/books/booksSlice';

const rootPersistConfig = {
    key: 'bookshelf-auth',
    storage,
    whitelist: ['auth', 'user', 'options']
};

const rootReducer = combineReducers({
    auth: authReducer,
    // books: booksReducer,
    user: userReducer,
    options: optionsReducer,
    [authApi.reducerPath]: authApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [userApi.reducerPath]: userApi.reducer
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
            .concat(authApi.middleware)
            .concat(booksApi.middleware)
            .concat(userApi.middleware)
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
