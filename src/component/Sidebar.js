import React from "react";
import { FaUser, FaThLarge } from "react-icons/fa";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      <div className="SidebarContainer">
        <p className="sidebarItem">
          <FaUser /> Log in{" "}
        </p>
        <p className="sidebarItem">
          {" "}
          <FaThLarge /> Customized ToDo{" "}
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
