import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import InfoPage from "../InfoPage/InfoPage";
import InputOyster from "../InputOyster/InputOyster";
import OysterMap from "../OysterMap/OysterMap";
import AdminInventory from "../AdminInventory/AdminInventory";

import "./App.css";
import LandingPage from "../LandingPage/LandingPage";
import OysterTable from "../OysterTable/OysterTable";
import CurrentInventory from "../CurrentInventory/CurrentInventory";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((redux) => redux.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
    dispatch({ type: "GET_OYSTERS" });
  }, []);

  return (
    <Router>
      <LandingPage />
      <div>
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          {user.id ? (
            <Redirect exact from="/" to="oyster-inventory" />
          ) : (
            <Redirect exact from="/" to="/oysters" />
          )}
          {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/oysters" component={OysterMap} />
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
          <ProtectedRoute exact path="/home" component={LandingPage} />
          {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
          <ProtectedRoute exact path="/info" component={InfoPage} />
          <ProtectedRoute exact path="/add-oysters" component={InputOyster} />
          <ProtectedRoute
            exact
            path="/oyster-inventory"
            component={AdminInventory}
          />
          <ProtectedRoute
            exact
            path="/my-inventory"
            component={CurrentInventory}
          />
          {/* If none of the other routes matched, we will show a 404. */}
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
