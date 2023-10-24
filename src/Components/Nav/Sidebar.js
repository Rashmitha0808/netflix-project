import React from "react";

const Sidebar = ({ onClose }) => {
  return (
    <div onClick={handleClose}>
      <div
        className="container_sidebar"
        style={{ width: "100px", height: "100vh", background: "black" }}
      >
        <button onClick={onClose}> close</button>
        <ul className="tabbed_primary_navigation">
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
    </div>
  );
};

export default Sidebar;
