import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserApi } from '../../api/UserApi';

export const signUp = createAsyncThunk('user/singUp', async (data) => {
    const response = await UserApi.signUp(data);
    const result = await response.json();
    if ('error' in result) {
        throw new Error(result.message);
    }
    return result;
});

export const login = createAsyncThunk('user/login', async (data) => {
    const response = await UserApi.login(data);
    const result = await response.json();
    if ('error' in result) {
        throw new Error(result.message);
    }
    return result;
});

export const logout = createAsyncThunk(
    'user/logout',
    async (data, thunkAPI) => {
        const token = thunkAPI.getState()?.user?.token;
        if (!token) {
            throw new Error('Token is undefined');
        }
        const response = await UserApi.logout({ token });
        const result = await response.json();
        if ('error' in result) {
            throw new Error(result.message);
        }
        return result;
    }
);

export const logoutAll = createAsyncThunk(
    'user/logoutAll',
    async (data, thunkAPI) => {
        const token = thunkAPI.getState()?.user?.token;
        if (!token) {
            throw new Error('Token is undefined');
        }
        const response = await UserApi.logoutAll({ token });
        const result = await response.json();
        if ('error' in result) {
            throw new Error(result.message);
        }
        return result;
    }
);

export const getCurrentUser = createAsyncThunk(
    'user/getCurrentUser',
    async (data, thunkAPI) => {
        const token = thunkAPI.getState()?.user?.token;
        if (!token) {
            throw new Error('Token is undefined');
        }
        const response = await UserApi.getCurrentUser({ token });
        const result = await response.json();
        if ('error' in result) {
            throw new Error(result.message);
        }
        return result;
    }
);
