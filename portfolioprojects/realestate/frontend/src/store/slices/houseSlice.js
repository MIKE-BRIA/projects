import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHouses = createAsyncThunk("houses/fetchHouses", async () => {
  const response = await axios.get("http://localhost:3000/houses");
  return response.data.houses;
});

const houseSlice = createSlice({
  name: "house",
  initialState: {
    houses: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHouses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.houses = action.payload;
      })
      .addCase(fetchHouses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllHouses = (state) => state.houses.houses;
//*getting houses that are only available for rent
export const selectRentHouses = createSelector([selectAllHouses], (houses) =>
  houses.filter((house) => house.category === "rent")
);

//*getting houses that are only available for sale
export const selectBuyHouses = createSelector([selectAllHouses], (houses) =>
  houses.filter((house) => house.category === "for sale")
);

export default houseSlice.reducer;
