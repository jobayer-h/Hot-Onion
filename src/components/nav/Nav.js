import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "../../images/logo-nav.png";
const Nav = () => {
  // eslint-disable-next-line
  const [logo, setLogo] = useState(navLogo);

  return (
    <section className="container">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="img-fluid logo"
              src={logo}
              alt="Red Onion restrurent"
            />
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
            <Hamburger />
            {/* <span className="navbar-toggler-icon"></span> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  <button className="btn btn-brand">SignUp</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Nav;
