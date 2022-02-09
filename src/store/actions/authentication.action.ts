import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axios";

export const signIn = createAsyncThunk('authentication/sign-in', async ({ email, password }: { email: string; password: string }, thunkApi) => {
    try {
        const response = await axiosInstance.post('/auth/login', { email, password });

        return response.data;
    } catch (e) {
        thunkApi.rejectWithValue(e);
    }
});

export const signUp = createAsyncThunk('authentication/sign-up', async ({ name, email, password, passwordConfirmation }: { name: string; email: string; password: string; passwordConfirmation: string; }, thunkApi) => {
    try {
        const response = await axiosInstance.post('/auth/register', { name, email, password, passwordConfirmation });

        return response.data;
    } catch (e) {
        thunkApi.rejectWithValue(e);
    }
});