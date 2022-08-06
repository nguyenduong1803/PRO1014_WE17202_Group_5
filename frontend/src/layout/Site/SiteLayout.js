import React, { lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import OrderTable from "../../pages/Site/OrderTable/OrderTable";
import Orders from "../../pages/Site/Order/Order";
import Menu from '../../pages/Site/Menu/Menu';
import OrderDetail from '../../pages/Site/OrderDetail/OrderDetail';
import Login from "../../pages/Site/Login/Login"
import Register from "../../pages/Site/Register/Register";
import DetailProduct from "../../pages/Site/DetailProducts/DetailProducts";
import Profile from '../../pages/Site/ProfileUser/ProfileUser'
import Checkpass from  '../../pages/Site/CheckPass/CheckPass';
import CheckEmail from "../../pages/Site/CheckEmail/CheckEmail";
import CheckOut from "../../pages/Site/CheckOuts/CheckOuts";
// import EditUser from '../../pages/Site/EditInformation/EditInformation';
// import EditPassWord from '../../pages/Site/EditPassWord/EditPassWord'
const PageNotFound=lazy(() => import("../../pages/Site/PageNotFound/PageNotFound"));
const Home=lazy(() => import("../../pages/Site/Home/Home"));
const Map=lazy(() => import("../../pages/Site/Map/Map"));
const routerSite = [
  { path: "/", component: Home, },
  { path: "/dang-nhap", component: Login, },
  { path: "/dang-ky", component: Register, },
  { path: "/dat-ban", component: OrderTable, },
  { path: "/hoa-don", component: Orders, },
  { path: "/menu", component: Menu, },
  { path: "/map", component: Map, },
  { path: "/chi-tiet-hoa-don/:name", component: OrderDetail , },
  { path: "/chi-tiet-don-hang", component: DetailProduct , },
  { path: "/profile", component:Profile , },
  { path: "/dat-lai-mat-khau", component:Checkpass , },
  { path: "/gui-email", component:CheckEmail , },
  { path: "/dat-hang", component: CheckOut , },
  // { path: "/edit-user", component: EditUser , },
  // { path: "/edit-password", component: EditPassWord , },
  { path: "*", component: PageNotFound , },
  
]

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
