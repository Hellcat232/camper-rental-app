import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66bc8c2a24da2de7ff6afee6.mockapi.io/api/v1";

export const getOffers = createAsyncThunk("api/camps", async (_, thunkAPI) => {
  try {
    const res = await axios.get("/camps");
    console.log(res);

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getOffersById = createAsyncThunk(
  "api/camp",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/camps/${id}`, id);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
