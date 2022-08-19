import React from "react";
import "./style.css";
function TopBar() {
  return (
    <div className='topbar'>
      <h1 className='title'>Yassir</h1>
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
