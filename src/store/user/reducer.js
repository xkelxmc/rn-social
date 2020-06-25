import { createSlice } from '@reduxjs/toolkit';
import { signUp, login, logout, logoutAll, getCurrentUser } from './actions';

const initialState = { user: null, isLoading: false, error: null, token: null };

export const userReducer = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        reset: () => initialState,
        error: (store, action) => {
            store.error = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(signUp.fulfilled, (state, action) => {
                state.user = action.payload.newUser;
                state.token = action.payload.token;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(getCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(logout.fulfilled, () => initialState)
            .addCase(logoutAll.fulfilled, () => initialState)
            .addMatcher(
                (action) =>
                    action.type.startsWith('user/') &&
                    action.type.endsWith('/fulfilled') &&
                    'requestId' in action.meta,
                (state) => {
                    state.isLoading = false;
                }
            )
            .addMatcher(
                (action) =>
                    action.type.startsWith('user/') &&
                    action.type.endsWith('/pending') &&
                    'requestId' in action.meta,
                (state) => {
                    state.error = null;
                    state.isLoading = true;
                }
            )
            .addMatcher(
                (action) =>
                    action.type.startsWith('user/') &&
                    action.type.endsWith('/rejected') &&
                    'requestId' in action.meta,
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.error.message
                        ? action.error.message
                        : 'Ошибка';
                }
            )
            .addDefaultCase(() => {}),
});
