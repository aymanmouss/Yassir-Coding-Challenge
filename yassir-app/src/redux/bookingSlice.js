import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBookingData = createAsyncThunk(
  "booking/getBookingData",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("https://api.npoint.io/876b18332149c3f39cea");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  bookingData: [],
  isLoading: false,
  err: null,
  searchValue: "",
  tagStatus: "",
  tagDate: "",
  tagShift: "",
  tagArea: "",
  filtreState: false,
  tagsState: false,
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchValue = action.payload;
    },
    filterStatus: (state, action) => {
      state.tagStatus = action.payload;
    },
    filterDate: (state, action) => {
      state.tagDate = action.payload;
    },
    filterShift: (state, action) => {
      state.tagShift = action.payload;
    },
    filterArea: (state, action) => {
      state.tagArea = action.payload;
    },
    changeFiltreState: (state, action) => {
      state.filtreState = action.payload;
    },
    changeTagsState: (state, action) => {
      state.tagsState = action.payload;
    },
  },
  extraReducers: {
    [getBookingData.pending]: (state, action) => {
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
export const {
  search,
  filterStatus,
  filterDate,
  filterShift,
  filterArea,
  changeFiltreState,
  changeTagsState,
} = bookingSlice.actions;
export default bookingSlice.reducer;
