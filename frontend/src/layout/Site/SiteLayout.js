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
<<<<<<< HEAD
import OrderDetail from '../../pages/Site/OrderDetail/OrderDetail';
=======
import Login from "../../pages/Site/Login/Login"
import Register from "../../pages/Site/Register/Register";
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
]
>>>>>>> 930eddf1f72283af5c29cc459031f0dd501bc254
function SiteLayout() {
  return (
    <>
        {/* <DataProvider> */}
          <Switch>
<<<<<<< HEAD
            <Route exact path="/" component={Home} />
            <Route exact path="/dang-nhap" component={Auth} />
            <Route exact path="/gio-hang" component={Cart} />
            <Route exact path="/dat-ban" component={OrderTable} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/thanh-toan" component={Checkout} />
            <Route exact path="/xac-nhan-don-hang" component={ConfirmBill} />
            <Route exact path="/hoa-don" component={Orders}/>
            <Route exact path="/menu" component={Menu}/>
            <Route exact path="/chi-tiet-don-hang" component={OrderDetail}/>

=======
              {
                routerSite.map((router, index) => {
                  return <Route
                    exact path={router.path}
                    key={index}
                    component={router.component} />
                })
              }
>>>>>>> 930eddf1f72283af5c29cc459031f0dd501bc254
          </Switch>
        {/* </DataProvider> */}
    </>
  );
}

export default SiteLayout;
