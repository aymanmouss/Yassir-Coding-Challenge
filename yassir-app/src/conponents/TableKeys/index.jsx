import React from "react";
import { useState } from "react";
import service from "../../services";

function TableKeys({ setOrder, order, data, setData }) {
  const [sortKey, setSortKey] = useState("Sort Data");
  const [drop, setDrop] = useState(false);
  return (
    <div style={{ maxWidth: "130px" }} className='dropDown m-table'>
      <p className='dropDown-title' onClick={() => setDrop(!drop)}>
        {sortKey} <i className='fa-solid fa-caret-down'></i>
      </p>
      {drop && (
        <ul className='dropDown-list'>
          <li
            onClick={() => {
              service.sorting("id", setOrder, order, data, setData);
              setSortKey("id");
              setDrop(false);
            }}
            className='dropDown-list-item'
          >
            id
          </li>
          <li
            onClick={() => {
              service.sorting("businessDate", setOrder, order, data, setData);
              setSortKey("Business Date");
              setDrop(false);
            }}
            className='dropDown-list-item'
          >
            Business Date
          </li>
          <li
            onClick={() => {
              service.sorting("status", setOrder, order, data, setData);
              setSortKey("Status");
              setDrop(false);
            }}
            className='dropDown-list-item'
          >
            Status
          </li>
          <li
            onClick={() => {
              service.sorting("shift", setOrder, order, data, setData);
              setSortKey("Shift");
              setDrop(false);
            }}
            className='dropDown-list-item'
          >
            Shift
          </li>

          <li
            onClick={() => {
              service.sorting("quantity", setOrder, order, data, setData);
              setSortKey("Quantity");
              setDrop(false);
            }}
            className='dropDown-list-item'
          >
            Quantity
          </li>
          <li
            onClick={() => {
              service.sortingNames(
                "customer",
                setOrder,
                order,
                data,
                setData,
                "firstName"
              );
              setSortKey("First Name");
              setDrop(false);
            }}
            className='dropDown-list-item'
          >
            First Name
          </li>
          <li
            onClick={() => {
              service.sortingNames(
                "customer",
                setOrder,
                order,
                data,
                setData,
                "lastName"
              );
              setSortKey("Last Name");
              setDrop(false);
            }}
            className='dropDown-list-item'
          >
            Last Name
          </li>
          <li
            onClick={() => {
              service.sorting("area", setOrder, order, data, setData);
              setSortKey("Area");
              setDrop(false);
            }}
            className='dropDown-list-item'
          >
            Area
          </li>
          <li
            onClick={() => {
              service.sorting("guestNotes", setOrder, order, data, setData);
              setSortKey("GuestNotes");
              setDrop(false);
            }}
            className='dropDown-list-item'
          >
            GuestNotes
          </li>
        </ul>
      )}
    </div>
  );
}

export default TableKeys;
