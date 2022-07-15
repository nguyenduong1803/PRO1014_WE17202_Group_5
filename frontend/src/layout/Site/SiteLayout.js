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

import OrderDetail from '../../pages/Site/OrderDetail/OrderDetail';

import Login from "../../pages/Site/Login/Login"
import Register from "../../pages/Site/Register/Register";
import PageNotFound from "../../pages/Site/PageNotFound/PageNotFound";
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
