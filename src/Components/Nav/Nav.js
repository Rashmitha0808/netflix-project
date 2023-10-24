import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../Nav/Navbar.css";
import DropdownMenu from "./DropdownMenu";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function Nav() {
  const [closeSideBar, setCloseSidebar] = useState(true);
  const [show, handleShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [arrow, setArrow] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const searchRef = useRef();
  const { authenticated } = useSelector((state) => state.user);
  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
    }
  }, [authenticated]);
  useEffect(() => {
    window.addEventListener("scroll", trasitionNavBar);
    return () => window.removeEventListener("scroll", trasitionNavBar);
  }, []);

  const openSearch = () => {
    console.log(searchRef.current);

    setIsSearchOpen(true);
  };
  const closeSearchOpen = () => {
    setIsSearchOpen(false);
  };
  const handleArrow = () => {
    setArrow(!arrow);
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const trasitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  const onOpenModalSidebar = (e) => {
    if (e.stopProgation) e.stopProgation();
    document.documentElement.style.overflow = "hidden";
    setCloseSidebar(true);
  };
  const onCloseModalSidebar = (e) => {
    document.documentElement.style.overflow = "";
    setCloseSidebar(false);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  // Debounce applied here
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchValue.length < 3) return;
      navigate(`/search/${searchValue}`);
    }, 2000);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchValue]);

  return (
    <div className="pinning_main">
      <div className="pinning_header">
        {closeSideBar && (
          <div class="option-icon-container">
            <AiOutlineMenu
              className="option_menu"
              onClose={onOpenModalSidebar}
            />
          </div>
        )}

        <Link
          to="/"
          className="logo icon-logoUpdate active"
          aria-label="Netflix"
        >
          <img src="/Assets/logo.png" alt="netflix-logo" />
        </Link>

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

        <div className="secondary_navigation">
          <div className="nav-element">
            <div
              className={`searchTab ${isSearchOpen ? "open" : ""}`}
              onClick={openSearch}
            >
              <button className="searchTab">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="search-icon ltr-4z3qvp e1svuwfo1"
                  data-name="MagnifyingGlass"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
                    fill="currentColor"
                  ></path>
                </svg>
                {isSearchOpen && (
                  <input
                    className="input_searchbox"
                    ref={searchRef}
                    onBlur={closeSearchOpen}
                    value={searchValue}
                    onChange={handleSearch}
                    type="text"
                    placeholder="Title, People, Genere"
                  />
                )}
              </button>
            </div>
          </div>

          <Link to="/star">
            <div className="nav-element">
              <span className="notifications">
                <button className="notifications-menu">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Bell"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </span>
            </div>
          </Link>

          <div className="nav-element">
            <div className="account-menu-item">
              <div className="account-dropdown-button" onClick={handleArrow}>
                <span className="profile-link">
                  <img
                    className="profile-icon"
                    src="https://occ-0-6624-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
                    alt="profile_img"
                  />
                </span>
                <span className={`caret ${arrow ? "arrow" : ""}`}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {arrow && <DropdownMenu className="dropdown_menu_carter" />}
    </div>
  );
}
export default Nav;
