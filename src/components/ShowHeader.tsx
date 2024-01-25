import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useTodoContext } from "./TodoContext";

function ShowHeader() {
  const { restoreDefaultItems } = useTodoContext();

  const handleRestoreDefaultItems = () => {
    console.log("Restoring default items");
    if (restoreDefaultItems) {
      restoreDefaultItems();
    }
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom sticky-header">
        <NavLink
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <h1 className="fs-4">Todo list</h1>
        </NavLink>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              activeclassname="active"
              aria-current="page"
            >
              Show List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add" className="nav-link">
              Add Item
            </NavLink>
          </li>
          <li className="nav-item">
            <button
              className="secondary btn btn-light nav-link"
              onClick={handleRestoreDefaultItems}
            >
              Restore Items
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default ShowHeader;
