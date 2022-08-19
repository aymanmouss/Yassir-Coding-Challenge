import React from "react";
import "./style.css";
function Tags({ tagName, filter }) {
  return (
    <p className='tags'>
      <span className='filter-tag'>{filter}</span>{" "}
      <span className='name-tag'>{tagName}</span>
      <i className='fa-solid fa-xmark'></i>
    </p>
  );
}

export default Tags;
