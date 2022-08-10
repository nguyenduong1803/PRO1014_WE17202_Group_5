import React from "react";
import InformationUser from "./InformationUser/InformationUser";
import products1 from "../../../assets/img/seafood-1.jpg";
import LayoutSite from "../LayoutSite/LayoutSite";
import ListOrder from "../OrderDetail/ListOrders/ListOrders";
import Status from "../OrderDetail/StatusOrders/StatusOrders";
import StepperMui from "./StatusOrders/StepperMui/StepperMui";
import Statistical from "./Statistical/Statistical";
import {  selectOrder } from "../../../redux/selector";
import { useSelector } from "react-redux";
const informationuser = [
  {
    img: products1,
    name: "Copyright",
    contacts: "(480) 555-0103",
    address: "6391 Elgin St. Celina, Delaware 10299",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
function OrderDetail() {
  const orders = useSelector(selectOrder)
 const orderId= window.location.pathname.split("/")[2]
 const myOder= orders.find(ele=> ele.id_invoice===orderId)
 console.log(orderId)
  return (
    <LayoutSite>
      <div className="row">
        <div className="col-lg-3">
              <InformationUser
                id={1}
                img={""}
                name={myOder?.user_name_book}
                contacts={myOder?.phone}
                time={myOder?.time_book}
                content={myOder?.note}
              />
          <div>
            <Statistical />
          </div>
        </div>
        <div className="col-lg-9">
          <ListOrder />
          <Status />
        </div>
      </div>
    </LayoutSite>
  );
}

export default OrderDetail;
