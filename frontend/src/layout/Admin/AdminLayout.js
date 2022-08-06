import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routerAdmin } from "../../config/routerAdmin"
import { StyledEngineProvider } from "@mui/material";

function AdminLayout() {

  return (
    <div style={{ display: `flex` }}>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
                <Switch>
                  {
                    routerAdmin.map((router, index) => (
                      <Route key={index} path={`/admin/${router.path}`} component={router.component} />
                    ))
                  }
                </Switch>
        </BrowserRouter>
      </StyledEngineProvider>
    </div>
  );
}

export default AdminLayout;
