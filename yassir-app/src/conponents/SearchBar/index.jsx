import React from "react";
import "./style.css";
function SearchBar() {
  return (
    <div className='searchBox'>
      <label htmlFor='searchBox'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </label>
      <input type='seach' id='search' />
    </div>
  );
}

export default SearchBar;
