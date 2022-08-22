import React from "react";
import "./style.css";
function Tags({ tagName, filter, setTag }) {
  return (
    <div className='tags'>
      <div className='tags-container'>
        <span className='filter-tag'>{filter}</span>{" "}
        <span className='name-tag'>{tagName}</span>
      </div>
      <i
        className='fa-solid fa-xmark'
        onClick={() => {
          setTag(false);
        }}
      ></i>
    </div>
  );
}

export default Tags;
