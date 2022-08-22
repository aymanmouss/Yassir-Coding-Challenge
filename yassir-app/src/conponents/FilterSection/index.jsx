import React, { useState } from "react";
import DropDown from "../DropDown";
import Tags from "../Tags";
import { status } from "../../data/data";
import { date } from "../../data/data";
import { shifts } from "../../data/data";
import { area } from "../../data/data";
import "./style.css";
function FilterSection() {
  const [tagStatus, seTagStatus] = useState("");
  const [tagDate, seTagDate] = useState("");
  const [tagShift, seTagShift] = useState("");
  const [tagArea, seTagArea] = useState("");
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
      </div>
    </div>
  );
}

export default FilterSection;
