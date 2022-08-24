import React, { useState } from "react";
import DropDown from "../DropDown";
import { status, area, date, shifts } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  changeFiltreState,
  filterArea,
  filterDate,
  filterShift,
  filterStatus,
} from "../../redux/bookingSlice";
import "./style.css";
function FilterSection() {
  const [tagStatus, seTagStatus] = useState("");
  const [tagDate, seTagDate] = useState("");
  const [tagShift, seTagShift] = useState("");
  const [tagArea, seTagArea] = useState("");
  const dispatch = useDispatch();
  // filterStatus, filterDate, filterShift, filterArea

  useEffect(() => {
    dispatch(filterStatus(tagStatus));
    dispatch(filterDate(tagDate));
    dispatch(filterShift(tagShift));
    dispatch(filterArea(tagArea));
  }, [dispatch, tagStatus, tagDate, tagShift, tagArea]);
  const filtreState = useSelector((state) => state.booking.filtreState);
  return (
    <div className='filter-section'>
      <p className='filter-section-title'>Filter by:</p>
      <div className='filter-section-dropDown'>
        <DropDown
          filterName={"Status"}
          filterData={status}
          setValue={seTagStatus}
        />
        <DropDown filterName={"Date"} filterData={date} setValue={seTagDate} />
        <DropDown
          filterName={"Shifts"}
          filterData={shifts}
          setValue={seTagShift}
        />
        <DropDown filterName={"Area"} filterData={area} setValue={seTagArea} />
        {filtreState && (
          <div
            className='dropDown btn-dropDown'
            onClick={() => {
              seTagStatus("");
              seTagShift("");
              seTagArea("");
              seTagDate("");
              dispatch(changeFiltreState(false));
            }}
          >
            <i className='fa-solid fa-xmark'></i>
            <p className='dropDown-title'>Clera All Filter</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterSection;
