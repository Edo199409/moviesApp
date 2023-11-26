import React, { useState } from "react";
import { Settings } from "../../components/Settings/Settings";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

export const Sidebar=()=> {
  const [open, setOpen] = useState(false);

  const openSidebar = () => {
    setOpen(true);
  };
  const closeSidebar = () => {
    setOpen(false);
  };

  return (
      <div
        onMouseOver={openSidebar}
        onMouseLeave={closeSidebar}
        className={open ? "main-menu open-sidebar" : "main-menu close-sidebar"}
      >
        <ul
          className={
            open ? "sidebar-container-opened" : "sidebar-container-closed"
          }
        >
          <li className="sidebar-title">
            <NavLink
              className={(navData) =>
                navData.isActive ? "active" : "unactive"
              }
              to="/search"
            >
              <img
                className="fa-2x"
                src={require("../../assets/icons/ICON - Search.png")}
              />
              <span className="nav-text">Search</span>
            </NavLink>
          </li>
          <li className="sidebar-title">
            <NavLink
              className={(navData) =>
                navData.isActive ? "active" : "unactive"
              }
              to="/home"
            >
              <img
                className="fa-2x"
                src={require("../../assets/icons/Group 46.png")}
              />
              <span className="nav-text"> Home</span>
            </NavLink>
          </li>
          <li className="sidebar-title">
            <NavLink
              className={(navData) =>
                navData.isActive ? "active" : "unactive"
              }
              to="/tvShows"
            >
              <img
                className="fa-2x"
                src={require("../../assets/icons/Group 56.png")}
              />
              <span className="nav-text">TV Shows</span>
            </NavLink>
          </li>
          <li className="sidebar-title">
            <NavLink
              className={(navData) =>
                navData.isActive ? "active" : "unactive"
              }
              to="/movies"
            >
              <img
                className="fa-2x"
                src={require("../../assets/icons/Group 54.png")}
              />
              <span className="nav-text">Movies</span>
            </NavLink>
          </li>
          <li className="sidebar-title">
            <NavLink
              className={(navData) =>
                navData.isActive ? "active" : "unactive"
              }
              to="/genres"
            >
              <img
                className="fa-2x"
                src={require("../../assets/icons/Group 53.png")}
              />
              <span className="nav-text">Genres</span>
            </NavLink>
          </li>
          <li className="sidebar-title">
            <NavLink
              className={(navData) =>
                navData.isActive ? "active" : "unactive"
              }
              to="/watchLater"
            >
              <img
                className="fa-2x"
                src={require("../../assets/icons/Group 47.png")}
              />
              <span className="nav-text">Watch Later</span>
            </NavLink>
          </li>
        </ul>

        {open ? <Settings /> : null}
      </div>
  );
}
