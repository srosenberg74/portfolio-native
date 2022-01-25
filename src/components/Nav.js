import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const style1 = {
    backgroundColor: "#082c45",
    fontFamily: "licorice",
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top px-3"
        style={{ fontFamily: "monospace", backgroundColor: "#082c45" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 nav-item" to={"/"} style={style1}>
            Sam Rosenberg
          </Link>
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
                <Link className="nav-link" onClick={ ()=>window.scrollTo(0, 0)} aria-current="page" to={"/profile"}>
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={ ()=>window.scrollTo(0, 0)} to={"/study"}>
                  Areas of Study
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={ ()=>window.scrollTo(0, 0)} to={"/career"}>
                  Career Development
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={ ()=>window.scrollTo(0, 0)} to={"/education"}>
                  Education
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={ ()=>window.scrollTo(0, 0)} to={"/portfolio"}>
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={ ()=>window.scrollTo(0, 0)} to={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
