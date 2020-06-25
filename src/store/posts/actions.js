import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostsApi } from '../../api/PostsApi';

export const fetchAll = createAsyncThunk(
    'posts/fetchAll',
    async (data, thunkAPI) => {
        const token = thunkAPI.getState()?.user?.token;
        if (!token) {
            throw new Error('Token is undefined');
        }
        const response = await PostsApi.fetchAll({ token });
        const result = await response.json();
        if ('error' in result) {
            throw new Error(result.message);
        }
        return result;
    }
);

export const findOne = createAsyncThunk(
    'posts/findOne',
    async ({ postId }, thunkAPI) => {
        const token = thunkAPI.getState()?.user?.token;
        if (!token) {
            throw new Error('Token is undefined');
        }
        const response = await PostsApi.findOne({ postId, token });
        const result = await response.json();
        if ('error' in result) {
            throw new Error(result.message);
        }
        return result;
    }
);

export const findByUserId = createAsyncThunk(
    'posts/findByUserId',
    async ({ userId }, thunkAPI) => {
        const token = thunkAPI.getState()?.user?.token;
        if (!token) {
            throw new Error('Token is undefined');
        }
        const response = await PostsApi.findByUserId({ userId, token });
        const result = await response.json();
        if ('error' in result) {
            throw new Error(result.message);
        }
        return result;
    }
);

export const createPost = createAsyncThunk(
    'posts/createPost',
    async ({ title, body }, thunkAPI) => {
        const token = thunkAPI.getState()?.user?.token;
        if (!token) {
            throw new Error('Token is undefined');
        }
        const response = await PostsApi.createPost({ title, body, token });
        const result = await response.json();
        if ('error' in result) {
            throw new Error(result.message);
        }
        return result;
    }
);

export const upVote = createAsyncThunk(
    'posts/upVote',
    async ({ postId }, thunkAPI) => {
        const token = thunkAPI.getState()?.user?.token;
        if (!token) {
            throw new Error('Token is undefined');
        }
        const response = await PostsApi.upVote({ postId, token });
        const result = await response.json();
        if ('error' in result) {
            throw new Error(result.message);
        }
        return result;
    }
);

export const downVote = createAsyncThunk(
    'posts/downVote',
    async ({ postId }, thunkAPI) => {
        const token = thunkAPI.getState()?.user?.token;
        if (!token) {
            throw new Error('Token is undefined');
        }
        const response = await PostsApi.downVote({ postId, token });
        const result = await response.json();
        if ('error' in result) {
            throw new Error(result.message);
        }
        return result;
    }
);
