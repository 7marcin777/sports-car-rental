import { configureStore } from '@reduxjs/toolkit';
import authenticationSlice from './slices/authentication.slice';
import userSlice from './slices/user.slice';

const preloadedState = localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')!) : {};

export const store = configureStore({
    reducer: {
        authentication: authenticationSlice,
        user: userSlice,
    },
    preloadedState,
})

store.subscribe(() => {
    localStorage.setItem('store', JSON.stringify(store.getState()));
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;