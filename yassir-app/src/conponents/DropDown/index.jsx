import React from "react";
import { useState } from "react";
import Tags from "../Tags";
import "./style.css";
function DropDown({ filterName, filterData, setValue }) {
  const [tag, setTag] = useState(false);
  const [drop, setDrop] = useState(false);
  const [dropValue, setDropValue] = useState(filterName);

  return (
    <div>
      <div className='dropDown'>
        <p className='dropDown-title' onClick={() => setDrop(!drop)}>
          {filterName} <i className='fa-solid fa-caret-down'></i>
        </p>
        {drop && (
          <ul className='dropDown-list'>
            {filterData.map((item, index) => {
              return (
                <li
                  key={index + 1}
                  className='dropDown-list-item'
                  onClick={() => {
                    setValue(item);
                    setDropValue(item);
                    setDrop(false);
                    setTag(true);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {tag && <Tags filter={"Status: "} tagName={dropValue} setTag={setTag} />}
    </div>
  );
}

export default DropDown;
