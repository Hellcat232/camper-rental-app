import { createSlice } from "@reduxjs/toolkit";
import { getOffers, getOffersById } from "./operation";

const initialState = {
  item: [],
};

const campsSlice = createSlice({
  name: "camps",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOffers.pending, (state, action) => {
        state.item = initialState.item;
      })
      .addCase(getOffers.fulfilled, (state, action) => {
        state.item = action.payload;
      })
      .addCase(getOffers.rejected, (state, action) => {
        state.item = initialState.item;
      })
      .addCase(getOffersById.pending, (state, action) => {})
      .addCase(getOffersById.fulfilled, (state, action) => {})
      .addCase(getOffersById.rejected, (state, action) => {});
  },
});

export const campsReducer = campsSlice.reducer;
