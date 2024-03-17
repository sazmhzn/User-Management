import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar child">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/UserManagement">User Management</Link>
          </li>
     
          <li>
            <Link to="/FAQ">FAQs</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>

        </ul>
      </div>
    </>
  );
};
export default Sidebar;
