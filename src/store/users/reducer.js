import { createSlice } from '@reduxjs/toolkit';
import { fetchAll, findOne } from './actions';

const initialState = { list: [], user: null, isLoading: false, error: null };

export const usersReducer = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        reset: () => initialState,
        error: (store, action) => {
            store.error = action.payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(fetchAll.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(findOne.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addMatcher(
                (action) =>
                    action.type.startsWith('users/') &&
                    action.type.endsWith('/fulfilled') &&
                    'requestId' in action.meta,
                (state) => {
                    state.isLoading = false;
                }
            )
            .addMatcher(
                (action) =>
                    action.type.startsWith('users/') &&
                    action.type.endsWith('/pending') &&
                    'requestId' in action.meta,
                (state) => {
                    state.error = null;
                    state.isLoading = true;
                }
            )
            .addMatcher(
                (action) =>
                    action.type.startsWith('users/') &&
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
