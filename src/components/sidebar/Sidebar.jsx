import React from "react";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Panel</span>
      </div>
      <div className="center">
        <ul>
          <li>Dashboard</li>
        </ul>
        <ul>
          <li>Dashboard</li>
        </ul>
        <ul>
          <li>Dashboard</li>
        </ul>
        <ul>
          <li>Dashboard</li>
        </ul>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Sidebar;
