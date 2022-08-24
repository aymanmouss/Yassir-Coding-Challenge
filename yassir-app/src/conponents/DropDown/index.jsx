import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFiltreState } from "../../redux/bookingSlice";
import "./style.css";
function DropDown({ filterName, filterData, setValue }) {
  const dispatch = useDispatch();
  const [tag, setTag] = useState(false);
  // variable to store the state of the dropDown up or down
  const [drop, setDrop] = useState(false);
  // this state to catch the output value of every dropdown
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

                    /* this is to change the stae and display 
                    button to clear filtering */

                    dispatch(changeFiltreState(true));
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DropDown;
