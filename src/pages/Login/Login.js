import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import logo from "../../images/logo-nav.png";
import "./Login.css";
const Login = () => {

  const [logedInUser, setLogedInUser] =useContext(userContext);

  const [oldUser, setOldUser] = useState({
    email: "",
    password: "",
  });

  const handleLogIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(oldUser.email, oldUser.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        setLogedInUser(user)
        alert('logedIn Success')
        // ...
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      const email = value;
      setOldUser({
        ...oldUser,
        email,
      });
    }
    if (name === "password") {
      const password = value;
      setOldUser({
        ...oldUser,
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
          onSubmit={handleLogIn}
          className="mx-auto"
          style={{ width: "300px" }}
        >
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
          <div className="text-center mb-3">
            <input
              type="submit"
              className="btn btn-danger w-100"
              value="LogIn"
            />
          </div>
          <div className="text-center mb-3">
            <Link to="/signup">Create New Account?</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
