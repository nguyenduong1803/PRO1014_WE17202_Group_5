import React from "react";
import InformationUser from "./InformationUser/InformationUser";
import products1 from "../../../assets/img/seafood-1.jpg";
import LayoutSite from "../LayoutSite/LayoutSite";
import ListOrder from "../OrderDetail/ListOrders/ListOrders";
import Status from "../OrderDetail/StatusOrders/StatusOrders";
import StepperMui from "./StatusOrders/StepperMui/StepperMui";
import Statistical from "./Statistical/Statistical";
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
  return (
    <LayoutSite>
      <div className="row">
        <div className="col-lg-3">
          {informationuser.map((info, index) => {
            return (
              <InformationUser
                key={index}
                img={info.img}
                name={info.name}
                contacts={info.contacts}
                address={info.address}
                content={info.content}
              />
            );
          })}
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
