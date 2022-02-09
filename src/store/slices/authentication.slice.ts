import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../models/User";
import axiosInstance from "../../utils/axios";
import { signIn, signUp } from "../actions/authentication.action";

export interface SignInPayload {
    access_token: string;
    user: User;
}

export interface SignUpPayload {
    access_token: string;
    user: User;
}

export interface AuthenticationState {
    isAuthenticated: boolean;
    accessToken: string;
}

const initialState: AuthenticationState = {
    isAuthenticated: false,
    accessToken: '',
};

const authenticate = (state, action: PayloadAction<SignInPayload | SignUpPayload>) => {
    state.accessToken = action.payload.access_token;
    state.isAuthenticated = true;

    localStorage.setItem('accessToken', action.payload.access_token);
    axiosInstance.defaults.headers['Authorization'] = `Bearer ${action.payload.access_token}`;
};

const slice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        signOut: (state) => {
            state.accessToken = '';
            state.isAuthenticated = false;

            localStorage.removeItem('accessToken');
            localStorage.removeItem('user');
            axiosInstance.defaults.headers['Authorization'] = undefined;
        }
    },
    extraReducers: {
        [signIn.fulfilled.type]: authenticate,
        [signUp.fulfilled.type]: authenticate,
    }
});

export const { signOut } = slice.actions;

export default slice.reducer;