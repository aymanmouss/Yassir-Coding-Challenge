import { configureStore } from "@reduxjs/toolkit";
import searchBooking, {
  filterStatus,
  filterDate,
  filterShift,
  filterArea,
  changeFiltreState,
  changeTagsState,
} from "./bookingSlice";
export const store = configureStore({
  reducer: {
    booking: searchBooking,
    filterStatus,
    filterDate,
    filterShift,
    filterArea,
    changeFiltreState,
    changeTagsState,
  },
});
