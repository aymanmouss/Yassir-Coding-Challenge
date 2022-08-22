import React from "react";
import "./style.css";
function Table() {
  return (
    <div>
      <table>
        <thead>
          <tr>
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
        <tbody>
          <tr>
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
          <tr>
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
          <tr>
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
          <tr>
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
          <tr>
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
