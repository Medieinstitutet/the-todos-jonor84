import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useTodoContext } from "./TodoContext";

function ShowHeader() {
  const { onRestoreItems } = useTodoContext();

  const restoreDefaultItems = () => {
    console.log("Restoring default items");
    if (onRestoreItems) {
      onRestoreItems();
    }
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom sticky-header">
        <NavLink
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4">Todo list for Jonor84</span>
        </NavLink>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              activeclassname="active"
              aria-current="page"
            >
              Show list
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add" className="nav-link">
              Add item
            </NavLink>
          </li>
          <li className="nav-item">
            <button className="nav-link" onClick={restoreDefaultItems}>
              Restore Items
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default ShowHeader;
