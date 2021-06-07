import firebase from "firebase/app";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { firebaseConfig } from "./config/firebaseConfig";
import Dashbord from "./pages/Dashbord/Dashbord";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PriveteRoute from "./pages/Login/PriveteRoute";
import SignUp from "./pages/Login/SignUp";
export const userContext = createContext();
function App() {
  const [logedInUser, setLogedInUser] = useState({});
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      setLogedInUser(user);
    } else {
      // No user is signed in.
    }
  });
  console.log(logedInUser);
  return (
    <userContext.Provider value={[logedInUser, setLogedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <PriveteRoute path="/dashbord">
            <Dashbord />
          </PriveteRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
