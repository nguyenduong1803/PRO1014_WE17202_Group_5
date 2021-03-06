import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Cart from "../../pages/Site/Cart/Cart";
import Checkout from "../../pages/Site/Checkout/Checkout";
import ConfirmBill from "../../pages/Site/ConfirmBill/ConfirmBill"
// import { DataProvider } from "../../contexts/DataContext";
import Home from "../../pages/Site/Home/Home";
import OrderTable from "../../pages/Site/OrderTable/OrderTable";
import Map from "../../pages/Site/Map/Map";
import Orders from "../../pages/Site/Order/Order";

import Menu from '../../pages/Site/Menu/Menu';
import OrderDetail from '../../pages/Site/OrderDetail/OrderDetail';
import Login from "../../pages/Site/Login/Login"
import Register from "../../pages/Site/Register/Register";
import DetailProduct from "../../pages/Site/DetailProducts/DetailProducts";
import Profile from '../../pages/Site/ProfileUser/ProfileUser'
import Checkpass from  '../../pages/Site/CheckPass/CheckPass';
import PageNotFound from "../../pages/Site/PageNotFound/PageNotFound";
import CheckEmail from "../../pages/Site/CheckEmail/CheckEmail";
import CheckOut from "../../pages/Site/CheckOuts/CheckOuts";
const routerSite = [
  { path: "/", component: Home, },
  { path: "/dang-nhap", component: Login, },
  { path: "/dang-ky", component: Register, },
  { path: "/gio-hang", component: Cart, },
  { path: "/dat-ban", component: OrderTable, },
  { path: "/thanh-toan", component: Checkout, },
  { path: "/xac-nhan-hoa-don", component: ConfirmBill, },
  { path: "/hoa-don", component: Orders, },
  { path: "/menu", component: Menu, },
  { path: "/map", component: Map, },
  { path: "/chi-tiet-hoa-don", component: OrderDetail , },
  { path: "/chi-tiet-don-hang", component: DetailProduct , },
  { path: "/profile", component:Profile , },
  { path: "/dat-lai-mat-khau", component:Checkpass , },
  { path: "/gui-email", component:CheckEmail , },
  { path: "/dat-hang", component: CheckOut , },
  { path: "*", component: PageNotFound , },

]

function SiteLayout() {
  return (
    <>
        {/* <DataProvider> */}
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
        {/* </DataProvider> */}
    </>
  );
}

export default SiteLayout;
