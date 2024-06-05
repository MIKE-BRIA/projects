import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./couter";
import AuthSlice from "./auth";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: AuthSlice.reducer },
});

export default store;
