import React from "react";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="/images/turnercars.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link text-uppercase active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase" href="#">
                Service
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link text-uppercase dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase disabled">About Us</a>
            </li>
          </ul>
          <button
            className="btn btn-outline-success text-uppercase me-2"
            type="submit"
          >
            login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
