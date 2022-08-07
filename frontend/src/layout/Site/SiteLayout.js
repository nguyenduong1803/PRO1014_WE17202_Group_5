import React from "react";
import { Switch, Route } from "react-router-dom";
import routerSite from "../../config/routerSite";
function SiteLayout() {
  return (
    <>
          <Switch>
              {
                routerSite.map((router, index) => {
                  return <Route
                    exact path={router.path}
                    key={index}
                    component={router.component} />
                })
              }
          </Switch>
    </>
  );
}

export default SiteLayout;
