import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import service from "../../services";
import Pagination from "../pagination";
import { paginationNumberPAge } from "../../data/data";
import "./style.css";
import TableKeys from "../TableKeys";

function Table() {
  // We fatch the data from Redux Store
  const fetchedData = useSelector(
    (state) => state.booking.bookingData.reservations
  );
  //We store fetchedData into data state
  useEffect(() => {
    setData(fetchedData);
  }, [fetchedData]);
  // boolean value for Loading state
  const isLoading = useSelector((state) => state.booking.isLoading);
  // input value for search bar
  const search = useSelector((state) => state.booking.searchValue);
  // Tags values
  const tagStatus = useSelector((state) => state.booking.tagStatus);
  const tagDate = useSelector((state) => state.booking.tagDate);
  const tagShift = useSelector((state) => state.booking.tagShift);
  const tagArea = useSelector((state) => state.booking.tagArea);

  // Reservations Data
  const [data, setData] = useState([]);

  // this variable is used to switsh sorting
  const [order, setOrder] = useState("ASC");

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);
  const indexOfLastPage = currentPage * dataPerPage;
  const indexOfFirsData = indexOfLastPage - dataPerPage;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // dropDown menu drop state
  const [drop, setDrop] = useState(false);
  // Filter function to filter data with Tags

  let serviceData = service.filter(
    data,
    tagStatus,
    tagShift,
    tagArea,
    search,
    tagDate
  );

  return (
    <div>
      <TableKeys
        setOrder={setOrder}
        order={order}
        data={data}
        setData={setData}
      />
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <table className='table'>
          <thead className='table-header'>
            <tr className='table-header-row'>
              <th
                onClick={() => {
                  service.sorting("id", setOrder, order, data, setData);
                }}
              >
                #
              </th>
              <th
                onClick={() => {
                  service.sorting(
                    "customer.firstName",
                    setOrder,
                    order,
                    data,
                    setData
                  );
                }}
              >
                First Name
              </th>
              <th
                onClick={() => {
                  service.sorting(
                    "customer.lastName",
                    setOrder,
                    order,
                    data,
                    setData
                  );
                }}
              >
                Last Name
              </th>
              <th
                onClick={() => {
                  service.sorting("quantity", setOrder, order, data, setData);
                }}
              >
                Quantity
              </th>
              <th
                onClick={() => {
                  service.sorting("area", setOrder, order, data, setData);
                }}
              >
                Area
              </th>
              <th
                onClick={() => {
                  service.sorting("shift", setOrder, order, data, setData);
                }}
              >
                Shift
              </th>
              <th
                onClick={() => {
                  service.sorting("status", setOrder, order, data, setData);
                }}
              >
                status
              </th>
              <th
                onClick={() => {
                  service.sorting(
                    "businessDate",
                    setOrder,
                    order,
                    data,
                    setData
                  );
                }}
              >
                Timeline
              </th>
              <th
                onClick={() => {
                  service.sorting("guestNotes", setOrder, order, data, setData);
                }}
              >
                GuestNotes
              </th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {serviceData
              ?.slice(indexOfFirsData, indexOfLastPage)
              .map((data) => {
                return (
                  <tr key={data.id} className='table-row'>
                    <td data-column='id'>{data.id}</td>
                    <td className='table-data-blue' data-column='First Name'>
                      {data.customer.firstName}
                    </td>
                    <td className='table-data-blue' data-column='Last Name'>
                      {data.customer.lastName}
                    </td>
                    <td data-column='Quantity'>{data.quantity}</td>
                    <td data-column='Area'>{data.area}</td>
                    <td data-column='Shift'>{data.shift}</td>
                    <td data-column='status'>{data.status}</td>
                    <td data-column='Timeline'>{data.businessDate}</td>
                    <td data-column='GuestNotes'>
                      {data.guestNotes ? data.guestNotes : "- - - "}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
      <div className='table-footer'>
        <div className='dropDown-pagination'>
          <p className='dropDown-title' onClick={() => setDrop(!drop)}>
            {dataPerPage} <i className='fa-solid fa-caret-down'></i>
          </p>
          {drop && (
            <ul className='dropDown-list'>
              {paginationNumberPAge.map((item, index) => {
                return (
                  <li
                    key={index + 1}
                    className='dropDown-list-item'
                    onClick={() => {
                      setDrop(false);
                      setDataPerPage(item);
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <Pagination
          dataPerPage={dataPerPage}
          totalemployees={serviceData?.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Table;
