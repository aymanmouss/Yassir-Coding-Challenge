import React from "react";
import SearchBar from "../SearchBar";

import "./style.css";

function SearchSection() {
  return (
    <div className='search-section'>
      <SearchBar />
      <button type='button' className='add-btn'>
        <i className='fa-solid fa-plus'></i> Add New
      </button>
    </div>
  );
}

export default SearchSection;
