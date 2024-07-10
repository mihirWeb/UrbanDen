import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetchingUser: false,
        isError: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetchingUser = true;
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isFetchingUser = false;
        },
        loginFailure: (state) => {
            state.isError = true;
        }
    }
});

export const {loginFailure, loginStart, loginSuccess} = userSlice.actions;
export default userSlice.reducer;