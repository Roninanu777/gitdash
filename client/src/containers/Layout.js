import React, { useContext, Suspense, useEffect, useState, lazy } from "react";
import axios from "axios";
import Profile from "../components/Profile";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import routes from "../routes";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../containers/Main";
import ThemedSuspense from "../components/ThemedSuspense";
import { SidebarContext } from "../context/SidebarContext";
import { ProfileContext } from "../context/ProfileContext";

const Page404 = lazy(() => import("../pages/404"));

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const [profile, setProfile] = useState({});
  const { setProfileHandler } = useContext(ProfileContext);
  let location = useLocation();

  useEffect(() => {
    closeSidebar();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    (async () => {
      const resp = await axios.get("https://api.github.com/user");
      setProfileHandler(resp.data);
      setProfile(resp.data);
      console.log(resp.data);
    })();
    //eslint-disable-next-line
  }, []);

  return (
    <div
      className={`relative flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header data={profile} />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect exact from="/app" to="/app/dashboard" />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
      <Profile data={profile} />
    </div>
  );
}

export default Layout;
