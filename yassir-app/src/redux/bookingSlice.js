import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  setTag: false,
};

export const bookingSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    closeTag: (state, action) => {
      state.setTag = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { closeTag } = bookingSlice.actions;

export default bookingSlice.reducer;
