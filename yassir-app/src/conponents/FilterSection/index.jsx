import React from "react";
import DropDown from "../DropDown";
import Tags from "../Tags";
import { status } from "../../data/data";
import { date } from "../../data/data";
import { shifts } from "../../data/data";
import { area } from "../../data/data";
import "./style.css";
function FilterSection() {
  return (
    <div className='filter-section'>
      <p className='filter-section-title'>Filter:</p>
      <div className='filter-section-tags'>
        <Tags filter={"Date: "} tagName={"Headers"} />
        <Tags filter={"Date: "} tagName={"Headers"} />
        <Tags filter={"Date: "} tagName={"Headers"} />
      </div>
      <div className='filter-section-dropDown'>
        <DropDown filterName={"Status"} filterData={status} />
        <DropDown filterName={"Date"} filterData={date} />
        <DropDown filterName={"Shifts"} filterData={shifts} />
        <DropDown filterName={"Area"} filterData={area} />
      </div>
    </div>
  );
}

export default FilterSection;
