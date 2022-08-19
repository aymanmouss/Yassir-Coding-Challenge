import React from "react";
import "./style.css";
import logo from "../../assets/yassir-logo.png";
function SideBar() {
  return (
    <div className='sidebar'>
      <img src={logo} alt='yassir-logo' className='sideBar-logo' />
      <i className='fa-solid fa-envelope'></i>
    </div>
  );
}

export default SideBar;
