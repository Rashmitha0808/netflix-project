import React from "react";
import { Link } from "react-router-dom";
const sidebarStyles = {
  display: "flex",
  gap: "70px",
  flexDirection: "column",
  alignItems: "flex-start",
};
const container_sidebar = {
  paddingTop: "30px",
  width: "150px",
  height: "100vh",
  backgroundColor: "black",
};
const Sidebar = () => {
  return (
    <div style={container_sidebar}>
      {/* style={{ width: "100px", height: "100vh", background: "black" }} */}
      <ul className="tabbed_primary_navigation" style={sidebarStyles}>
        <Link className="links current" to="/">
          <li className="navigation_tab ">Home</li>
        </Link>

        <li className="navigation_tab">
          <Link to="/tv-shows">TV Shows</Link>
        </li>
        <li className="navigation_tab">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="navigation_tab">
          <Link to="/new-popular">New &amp; Popular</Link>
        </li>
        <li className="navigation_tab">
          <Link to="/mylist">My List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
