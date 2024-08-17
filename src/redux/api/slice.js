import { createSlice } from "@reduxjs/toolkit";
import { getOffers, getOffersById } from "./operation";

const initialState = {
  allItem: [],
  item: [],
};

const campsSlice = createSlice({
  name: "camps",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOffers.pending, (state, action) => {
        state.allItem = initialState.allItem;
      })
      .addCase(getOffers.fulfilled, (state, action) => {
        state.allItem = action.payload;
        console.log("allItem:", state.allItem);
      })
      .addCase(getOffers.rejected, (state, action) => {
        state.allItem = initialState.allItem;
      })
      .addCase(getOffersById.pending, (state, action) => {
        state.item = [];
      })
      .addCase(getOffersById.fulfilled, (state, action) => {
        const foundItem = state.allItem.find(
          (item) => item.id === action.payload.id
        );
        console.log(foundItem, "foundItem");

        // state.item = foundItem || [];

        state.item = [foundItem];

        console.log("item", state.item);
      })
      .addCase(getOffersById.rejected, (state, action) => {
        state.item = [];
      });
  },
});

export const campsReducer = campsSlice.reducer;
