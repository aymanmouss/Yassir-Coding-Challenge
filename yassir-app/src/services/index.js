// filter dates by past and future
const dateFilter = (date, tagDate) => {
  if (tagDate === "Past") {
    return new Date(date.start) <= new Date();
  } else if (tagDate === "Future Dates") {
    return new Date(date.start) >= new Date();
  } else return date;
};
// filter ans search by all tags
const filter = (data, tagStatus, tagShift, tagArea, search, tagDate) => {
  return data
    ?.filter(
      (val) =>
        val.status.toLowerCase().indexOf(tagStatus.toLowerCase()) > -1 &&
        val.shift.toLowerCase().indexOf(tagShift.toLowerCase()) > -1 &&
        val.area.toLowerCase().indexOf(tagArea.toLowerCase()) > -1 &&
        dateFilter(val, tagDate)
    )
    .filter(
      (val) =>
        val.customer.firstName.toLowerCase().indexOf(search) > -1 ||
        val.customer.lastName.toLowerCase().indexOf(search) > -1 ||
        val.id.toString().indexOf(search) > -1
    );
};
// filter by customer name and las name
const sortingNames = (col, setOrder, order, data, setData, col2) => {
  if (order === "ASC") {
    const soreted = [...data].sort((a, b) =>
      a[col][col2] > b[col][col2] ? 1 : -1
    );

    setData(soreted);
    setOrder("DSC");
  }
  if (order === "DSC") {
    const soreted = [...data].sort((a, b) =>
      a[col][col2] < b[col][col2] ? 1 : -1
    );
    setData(soreted);
    setOrder("ASC");
  }
};
// data filtering
const sorting = (col, setOrder, order, data, setData) => {
  if (order === "ASC") {
    const soreted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1));

    setData(soreted);
    setOrder("DSC");
  }
  if (order === "DSC") {
    const soreted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1));
    setData(soreted);
    setOrder("ASC");
  }
};

const service = {
  filter,
  sorting,
  sortingNames,
};
export default service;
