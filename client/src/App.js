import React, { lazy } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";

const Layout = lazy(() => import("./containers/Layout"));
// const Login = lazy(() => import("./pages/Login"));
// const CreateAccount = lazy(() => import("./pages/CreateAccount"));
// const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function App() {
  axios.defaults.headers.common["Accept"] = "application/vnd.github.v3+json";
  axios.defaults.headers.common["Authorization"] =
    "token " + process.env.REACT_APP_ACCESS_TOKEN;
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/app" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
