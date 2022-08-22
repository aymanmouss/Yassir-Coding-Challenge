import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBookingData = createAsyncThunk("booking/data", () => {
  return axios.get("../serverResponse.json").then((response) => response.data);
});

const initialState = {
  bookingData: [],
  isLoading: false,
  err: null,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  extraReducers: {
    [getBookingData.pending]: (state) => {
      state.isLoading = true;
    },
    [getBookingData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.bookingData = action.payload;
    },
    [getBookingData.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.err;
    },
  },
});

// Action creators are generated for each case reducer function

export default bookingSlice.reducer;
