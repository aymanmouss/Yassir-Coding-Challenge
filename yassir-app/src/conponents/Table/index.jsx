import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookingData } from "../../redux/bookingSlice";
import "./style.css";
function Table() {
  const bookingDatas = useSelector((state) => state.bookingData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookingData());
  }, []);
  return (
    <div>
      {console.log(bookingDatas)}
      <table className='table'>
        <thead className='table-header'>
          <tr className='table-header'>
            <th>#</th>
            <th onClick={() => console.log("clicked")}>First Name</th>
            <th>Last Name</th>
            <th>Quantity</th>
            <th>Area</th>
            <th>Shift</th>
            <th>status</th>
            <th>Timeline</th>
            <th>GuestNotes</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          <tr className='table-row'>
            <td data-column='id'>1</td>
            <td className='table-data-blue' data-column='First Name'>
              Yuri
            </td>
            <td className='table-data-blue' data-column='Last Name'>
              Burchell
            </td>
            <td data-column='Quantity'>1</td>
            <td data-column='Area'>Bar</td>
            <td data-column='Shift'>Lunch</td>
            <td data-column='status'>Confirmed</td>
            <td data-column='Timeline'>Timeline</td>
            <td data-column='GuestNotes'>Likes the blue cheese burguer</td>
          </tr>
          <tr className='table-row'>
            <td data-column='id'>1</td>
            <td className='table-data-blue' data-column='First Name'>
              Yuri
            </td>
            <td className='table-data-blue' data-column='Last Name'>
              Burchell
            </td>
            <td data-column='Quantity'>1</td>
            <td data-column='Area'>Bar</td>
            <td data-column='Shift'>Lunch</td>
            <td data-column='status'>Confirmed</td>
            <td data-column='Timeline'>Timeline</td>
            <td data-column='GuestNotes'>Likes the blue cheese burguer</td>
          </tr>
          <tr className='table-row'>
            <td data-column='id'>1</td>
            <td className='table-data-blue' data-column='First Name'>
              Yuri
            </td>
            <td className='table-data-blue' data-column='Last Name'>
              Burchell
            </td>
            <td data-column='Quantity'>1</td>
            <td data-column='Area'>Bar</td>
            <td data-column='Shift'>Lunch</td>
            <td data-column='status'>Confirmed</td>
            <td data-column='Timeline'>Timeline</td>
            <td data-column='GuestNotes'>Likes the blue cheese burguer</td>
          </tr>
          <tr className='table-row'>
            <td data-column='id'>1</td>
            <td className='table-data-blue' data-column='First Name'>
              Yuri
            </td>
            <td className='table-data-blue' data-column='Last Name'>
              Burchell
            </td>
            <td data-column='Quantity'>1</td>
            <td data-column='Area'>Bar</td>
            <td data-column='Shift'>Lunch</td>
            <td data-column='status'>Confirmed</td>
            <td data-column='Timeline'>Timeline</td>
            <td data-column='GuestNotes'>Likes the blue cheese burguer</td>
          </tr>
          <tr className='table-row'>
            <td data-column='id'>1</td>
            <td className='table-data-blue' data-column='First Name'>
              Yuri
            </td>
            <td className='table-data-blue' data-column='Last Name'>
              Burchell
            </td>
            <td data-column='Quantity'>1</td>
            <td data-column='Area'>Bar</td>
            <td data-column='Shift'>Lunch</td>
            <td data-column='status'>Confirmed</td>
            <td data-column='Timeline'>Timeline</td>
            <td data-column='GuestNotes'>Likes the blue cheese burguer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
