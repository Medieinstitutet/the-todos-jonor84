function ShowFooter() {
  return (
    <>
      <footer className="sticky-footer">
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <span className="mb-3 mb-md-0 text-body-secondary">
                © 2023 JN-Utvecklare
              </span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  href="https://www.linkedin.com/in/jn-utvecklare"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-body-secondary"
                  href="https://github.com/jonor84"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </footer>
    </>
  );
}

export default ShowFooter;
