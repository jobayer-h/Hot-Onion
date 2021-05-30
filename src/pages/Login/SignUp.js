import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-nav.png";
import "./Login.css";
const Login = () => {
  return (
    <section className="login-bg">
      <div>
        <div className="text-center py-5">
          <Link className="navbar-brand" to="/">
            <img
              className="img-fluid logo"
              src={logo}
              alt="Red Onion restrurent"
            />
          </Link>
        </div>
        <form className="mx-auto" style={{ width: "300px" }}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control login-input"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control login-input"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control login-input"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control login-input"
              name="confirm-password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="text-center mb-3">
            <input
              type="submit"
              className="btn btn-danger w-100"
              value="SignUp"
            />
          </div>
          <div className="text-center mb-3">
            <Link to="/login">Already Have An Account?</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
