import { Link } from "react-router-dom";

function ShowHeader() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom sticky-header">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span className="fs-4">Todo list for Jonor84</span>
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link"
              activeclassname="active"
              aria-current="page"
            >
              Show list
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add" className="nav-link">
              Add item
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default ShowHeader;
