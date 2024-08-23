import { createSlice } from "@reduxjs/toolkit";
import { getOffers, getOffersById } from "./operation";

const initialState = {
  allItem: [],
  item: [],
  error: false,
  loading: false,
  openModal: false,
  isLoggedIn: true,
  user: null,
};

const campsSlice = createSlice({
  name: "camps",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getOffers.pending, (state, action) => {
        state.allItem = initialState.allItem;
        state.item = initialState.item;
        state.error = false;
        state.loading = true;
        state.openModal = false;
        state.isLoggedIn = true;
      })
      .addCase(getOffers.fulfilled, (state, action) => {
        state.allItem = action.payload;
        state.item = initialState.item;
        state.error = false;
        state.loading = false;
        state.openModal = false;
        state.isLoggedIn = true;
      })
      .addCase(getOffers.rejected, (state, action) => {
        state.allItem = initialState.allItem;
        state.item = initialState.item;
        state.error = true;
        state.loading = false;
        state.openModal = false;
        state.isLoggedIn = true;
      })
      .addCase(getOffersById.pending, (state, action) => {
        // state.item = state.allItem;
        state.error = false;
        state.loading = true;
        state.openModal = false;
        state.isLoggedIn = true;
      })
      .addCase(getOffersById.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.error = false;
        state.loading = false;
        state.openModal = true;
        const foundItem = state.allItem.find(
          (item) => item.id === action.payload.id
        );

        state.item = [action.payload];
      })
      .addCase(getOffersById.rejected, (state, action) => {
        state.item = initialState.item;
        state.error = true;
        state.loading = false;
        state.openModal = false;
        state.isLoggedIn = true;
      });
  },
});

export const campsReducer = campsSlice.reducer;
