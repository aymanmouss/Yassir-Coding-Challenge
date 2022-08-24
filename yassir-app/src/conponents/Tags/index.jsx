import React from "react";

import "./style.css";

function Tags({ tagName, filter, setTag }) {
  return (
    <div className='tags'>
      <i className='fa-solid fa-tag'></i>
      <span className='filter-tag'>{filter}</span>{" "}
      <span className='name-tag'>{tagName}</span>
      {/* <i
        className='fa-solid fa-xmark'
        onClick={() => {
          setTag(false);
        }}
      ></i> */}
    </div>
  );
}

export default Tags;
