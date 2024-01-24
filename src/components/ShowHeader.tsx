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
              <svg className="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap"></use>
              </svg>
              <span className="fs-4">Simple header</span>
            </a>

            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="#" className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About
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
