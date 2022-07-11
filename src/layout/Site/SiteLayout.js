import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Cart from "../../pages/Site/Cart/Cart";
import Checkout from "../../pages/Site/Checkout/Checkout";
import Auth from "../../pages/Site/Auth/Auth";
import AuthContextProvider from "../../contexts/AuthContext";
import ConfirmBill from "../../pages/Site/ConfirmBill/ConfirmBill"
import { DataProvider } from "../../contexts/DataContext";
import Home from "../../pages/Site/Home/Home";
import OrderTable from "../../pages/Site/OrderTable/OrderTable";
import Map from "../../pages/Site/Map/Map";
import Orders from "../../pages/Site/Order/Order";
function SiteLayout() {
  return (
    <>
      <AuthContextProvider>
        <DataProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dang-nhap" component={Auth} />
            <Route exact path="/gio-hang" component={Cart} />
            <Route exact path="/dat-ban" component={OrderTable} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/thanh-toan" component={Checkout} />
            <Route exact path="/xac-nhan-don-hang" component={ConfirmBill} />
            <Route exact path="/hoa-don" component={Orders}/>
              
          </Switch>
        </DataProvider>
      </AuthContextProvider>
    </>
  );
}

export default SiteLayout;
