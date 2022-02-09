import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../models/User";
import { signIn, signUp } from "../actions/authentication.action";
import { SignInPayload, SignUpPayload } from "./authentication.slice";

export interface UserState extends User {
}

const initialState: UserState = {
    id: -1,
    email: '',
    name: '',
};

const postAuthenticate = (state, action: PayloadAction<SignInPayload | SignUpPayload>) => {
    state.id = action.payload.user.id;
    state.email = action.payload.user.email;
    state.name = action.payload.user.name;

    localStorage.setItem('user', JSON.stringify(action.payload.user));
};

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [signIn.fulfilled.type]: postAuthenticate,
        [signUp.fulfilled.type]: postAuthenticate,
    }
});

export default slice.reducer;