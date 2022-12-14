import React, { useState } from "react";
import "./style.css";
const Pagination = ({ dataPerPage, totalemployees, paginate }) => {
  const pageNumbers = [];
  // create a list of pages number
  for (let i = 1; i <= Math.ceil(totalemployees / dataPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='paginations'>
      {pageNumbers.map((number, index) => {
        return (
          <div key={index}>
            <p
              className='pagination-link'
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
