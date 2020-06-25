import { createSlice } from '@reduxjs/toolkit';
import {
    fetchAll,
    findOne,
    findByUserId,
    createPost,
    downVote,
    upVote,
} from './actions';

const initialState = { list: [], post: null, isLoading: false, error: null };

export const postsReducer = createSlice({
    name: 'posts',
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
                state.post = action.payload;
            })
            .addCase(findByUserId.fulfilled, (state, action) => {
                state.list = action.payload;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.post = action.payload;
            })
            .addCase(upVote.fulfilled, (state, action) => {
                state.list = state.list.map((post) => {
                    if (post._id === action.payload._id) {
                        return action.payload;
                    }
                    return post;
                });
            })
            .addCase(downVote.fulfilled, (state, action) => {
                state.list = state.list.map((post) => {
                    if (post._id === action.payload._id) {
                        return action.payload;
                    }
                    return post;
                });
            })
            .addMatcher(
                (action) =>
                    action.type.startsWith('posts/') &&
                    action.type.endsWith('/fulfilled') &&
                    'requestId' in action.meta,
                (state) => {
                    state.isLoading = false;
                }
            )
            .addMatcher(
                (action) =>
                    action.type.startsWith('posts/') &&
                    action.type.endsWith('/pending') &&
                    'requestId' in action.meta,
                (state) => {
                    state.error = null;
                    state.isLoading = true;
                }
            )
            .addMatcher(
                (action) =>
                    action.type.startsWith('posts/') &&
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
