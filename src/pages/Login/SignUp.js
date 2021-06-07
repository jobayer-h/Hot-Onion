import firebase from "firebase/app";
import "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo-nav.png";
import "./Login.css";
const Login = () => {
  // 
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        
        // ...
      })
      .catch((error) => {
        var errorMessage = error.message;
        
        // ..
      });
    console.log("form submited");
  };

  const handleBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      const email = value;
      setNewUser({
        ...newUser,
        email,
      });
    }
    if (name === "password") {
      const password = value;
      setNewUser({
        ...newUser,
        password,
      });
    }
  };

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
        <form
          className="mx-auto"
          onSubmit={handleSubmit}
          style={{ width: "300px" }}
        >
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
              onBlur={handleBlur}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control login-input"
              name="password"
              placeholder="Password"
              onBlur={handleBlur}
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
