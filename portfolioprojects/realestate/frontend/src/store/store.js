import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./slices/houseSlice";

const store = configureStore({
  reducer: {
    houses: houseReducer,
  },
});

export default store;
