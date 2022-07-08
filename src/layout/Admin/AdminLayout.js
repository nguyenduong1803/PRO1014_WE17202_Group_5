import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routerAdmin } from "../../config/routerAdmin"
import { UserProvider } from "../../contexts/UserContext.js";
import { OrderProvider } from "../../contexts/OrderContext.js";
import { DataProvider } from "../../contexts/DataContext.js";
import { BlogProvider } from "../../contexts/BlogContext.js";

function AdminLayout() {
  return (
    <div style={{ display: `flex` }}>
      <BrowserRouter>
        <UserProvider>
          <OrderProvider>
            <DataProvider>
              <BlogProvider>
                <Switch>
                  {
                    routerAdmin.map((router, index) => (
                      <Route key={index} path={`/admin/${router.path}`}component={router.component} />
                    ))
                  }
                </Switch>
              </BlogProvider>
            </DataProvider>
          </OrderProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default AdminLayout;
