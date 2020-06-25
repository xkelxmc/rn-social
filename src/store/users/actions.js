import { createAsyncThunk } from '@reduxjs/toolkit';
import { UsersApi } from '../../api/UsersApi';

export const fetchAll = createAsyncThunk(
    'users/fetchAll',
    async (data, thunkAPI) => {
        const token = thunkAPI.getState()?.user?.token;
        if (!token) {
            throw new Error('Token is undefined');
        }
        const response = await UsersApi.fetchAll({ token });
        const result = await response.json();
        if ('error' in result) {
            throw new Error(result.message);
        }
        return result;
    }
);

export const findOne = createAsyncThunk(
    'users/findOne',
    async ({ userId }, thunkAPI) => {
        const token = thunkAPI.getState()?.user?.token;
        if (!token) {
            throw new Error('Token is undefined');
        }
        const response = await UsersApi.findOne({ userId, token });
        const result = await response.json();
        if ('error' in result) {
            throw new Error(result.message);
        }
        return result;
    }
);
