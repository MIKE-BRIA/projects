import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./slices/houseSlice";
import agentReducer from "./slices/agentSlice";

const store = configureStore({
  reducer: {
    houses: houseReducer,
    agents: agentReducer,
  },
});

export default store;
