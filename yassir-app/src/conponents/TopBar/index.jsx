import React from "react";
import "./style.css";
import logo from "../../assets/yassir-logo-vector.svg";
function TopBar() {
  return (
    <div className='topbar'>
      <div className='m-container'>
        <i className='fa-solid fa-bars m-topbar-icon'></i>
        <img src={logo} alt='yassir-logo' className='topBar-logo' />
      </div>
      <h1 className='title'>YASSIR</h1>
      <div className='topbar-info'>
        <i className='fa-solid fa-circle-info'></i>
        <div className='topbar-notifications'>
          <i className='fa-solid fa-bell'></i>
          <p className='topbar-notifications-counter'>1</p>
        </div>
        <i className='fa-solid fa-arrow-right-from-bracket'></i>
      </div>
    </div>
  );
}

export default TopBar;
