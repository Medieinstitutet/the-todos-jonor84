import React from "react";

function ShowHeader() {
  return (
    <>
      <header className="sticky-header">
        <div className="container">
          <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <span className="fs-4">Todo list for Jonor84</span>
            </a>

            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link active" aria-current="page">
                  Show list
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Add item
                </a>
              </li>
            </ul>
          </header>
        </div>
      </header>
    </>
  );
}

export default ShowHeader;
