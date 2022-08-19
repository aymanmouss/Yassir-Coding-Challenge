import React from "react";
import { useState } from "react";
import "./style.css";
function DropDown({ filterName, filterData }) {
  const [drop, setDrop] = useState(false);
  const [dropValue, setDropValue] = useState(filterName);
  return (
    <div className='dropDown'>
      <p className='dropDown-title' onClick={() => setDrop(!drop)}>
        {dropValue} <i class='fa-solid fa-caret-down'></i>
      </p>
      {drop && (
        <ul className='dropDown-list'>
          {filterData.map((item) => {
            return (
              <li
                className='dropDown-list-item'
                onClick={() => {
                  setDropValue(item);
                  setDrop(false);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
