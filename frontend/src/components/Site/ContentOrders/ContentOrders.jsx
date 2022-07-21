import React from "react";
import OrdersHistory from "../ContentOrders/OrdersHistory/OrderHistory";
import product1 from "../../../../src/assets/img/seafood-1.jpg";
import LayoutSite from "../LayoutSite/LayoutSite";
const ordersHistory = [
  {
    id: 1,
    Date: "23 Feb 2021, 08:28 PM",
    img: product1,
    imgUser: product1,
    phone: 789,
   
    name:"Hòa Trần",
    ban:'A12'
  },
  {
    id: 1,
    Date: "23 Feb 2021, 08:28 PM",
    img: product1,
    imgUser: product1,
    phone: 789,
   
    name:"Hữu Dương",
    ban:'A12'
  },
  {
    id: 1,
    Date: "23 Feb 2021, 08:28 PM",
    img: product1,
    imgUser: product1,
    phone: 123,
   
    name:"Pizza",
    ban:'A12'
  },
  {
    id: 1,
    Date: "23 Feb 2021, 08:28 PM",
    img: product1,
    imgUser: product1,
    phone: 789,
   
    name:"Pizza",
    ban:'A12'
  },
];
function ContentOrders() {
  return (
    <LayoutSite>
      <h2>Order History</h2>
      <div className="row" style={{ zIndex: "10", position: "relative" }}>
        {ordersHistory.map((order, index) => {
          return (
            <OrdersHistory
              key={index}
              name={order.name}              id={order.id}
              Date={order.Date}
              img={order.img}
              phone={order.phone}
              imgUser={order.imgUser}
              ban={order.ban}
            />
          );
        })}
      </div>
    </LayoutSite>
  );
}

export default ContentOrders;
