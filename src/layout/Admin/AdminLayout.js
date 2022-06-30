import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import Dashboard from "../../pages/Admin/Dashboard/Dashboard";
// import Equipmentmanagement from "../../pages/Admin/Equipmentmanagement/Equipmentmanagement";
import Login from "../../pages/Admin/Login/Login";
import AddProducts from "../../pages/Admin/AddProducts/AddProducts";
import Profile from "../../pages/Admin/UserManager/Profile/Profile";
import UserManager from "../../pages/Admin/UserManager/UserManager";
import Register from "../../pages/Admin/Register/Register";
import ManagePosts from "../../pages/Admin/ManagePosts/ManagePosts";
import Equipmentmanagement from "../../pages/Admin/Equipmentmanagement/Equipmentmanagement";
import Article from "../../pages/Admin/ManagePosts/Article/Article";
import { UserProvider } from "../../contexts/UserContext.js";
import { OrderProvider } from "../../contexts/OrderContext.js";
import { DataProvider } from "../../contexts/DataContext.js";
import { BlogProvider } from "../../contexts/BlogContext.js";
import OrderManager from "../../pages/Admin/OrderManager/OrderManager";
import OrderDetail from "../../pages/Admin/OrderManager/OrderDetail/OrderDetail";
import EditProduct from "../../pages/Admin/Equipmentmanagement/EditProduct/EditProduct";
import AddPostDetail from "../../pages/Admin/ManagePosts/AddPostDetail/AddPostDetail"

function AdminLayout() {
  return (
    <div style={{ display: `flex` }}>
      <BrowserRouter>
        <UserProvider>
          <OrderProvider>
            <DataProvider>
              <BlogProvider>
              {window.location.href.includes("dang-nhap") ||
              window.location.href.includes("dang-ky") ? (
                ""
              ) : (
                <Sidebar />
              )}
              <Switch>
                <Route path="/admin/dashboard" component={Dashboard} />
                <Route
                  path="/admin/quan-ly-san-pham"
                  component={Equipmentmanagement}
                />
                <Route path="/admin/them-san-pham" component={AddProducts} />
                <Route path="/admin/sua-san-pham" component={EditProduct} />
                <Route
                  path="/admin/quan-ly-nguoi-dung"
                  component={UserManager}
                />
                <Route path="/admin/dang-nhap" component={Login} />
                <Route path="/admin/dang-ky" component={Register} />
                <Route path="/admin/quan-ly-bai-viet" component={ManagePosts} />
                <Route path="/admin/thong-tin-bai-viet" component={Article} />
                <Route path="/admin/them-bai-viet" component={AddPostDetail} />
                <Route
                  path="/admin/quan-ly-don-hang"
                  component={OrderManager}
                />
                <Route path="/admin/chi-tiet-nguoi-dung" component={Profile} />
                <Route
                  path="/admin/chi-tiet-don-hang"
                  component={OrderDetail}
                />
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
