import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAgents = createAsyncThunk("agents/fetchAgents", async () => {
  const response = await axios.get("api/agents");
  return response.data.agent;
});

export const addAgent = createAsyncThunk(
  "agents/addAgent",
  async (newAgent) => {
    await axios.post("api/agents", newAgent);
  }
);

export const removeAgent = createAsyncThunk(
  "agents/removeAgent",
  async (agentId) => {
    await axios.delete(`api/agents/${agentId}`);
  }
);

const agentSlice = createSlice({
  name: "agents",
  initialState: {
    agents: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAgents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAgents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.agents = action.payload;
      })
      .addCase(fetchAgents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default agentSlice.reducer;
