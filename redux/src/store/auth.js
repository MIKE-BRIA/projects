import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuth: false };

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice;
