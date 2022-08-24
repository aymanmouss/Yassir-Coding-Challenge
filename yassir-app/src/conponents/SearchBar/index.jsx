import React from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/bookingSlice";
import "./style.css";
function SearchBar() {
  const dispatch = useDispatch();
  return (
    <div className='searchBox'>
      <label htmlFor='searchBox'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </label>
      <input
        type='seach'
        id='search'
        placeholder='Search by Name and ID'
        onChange={(e) => dispatch(search(e.target.value))}
      />
    </div>
  );
}

export default SearchBar;
