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
    price: 10,
    content: "Vegetable Fritters with Egg",
    title: "Pizza",
  },
  {
    id: 1,
    Date: "23 Feb 2021, 08:28 PM",
    img: product1,
    imgUser: product1,
    price: 10,
    content: "Vegetable Fritters with Egg",
    title: "Pizza",
  },
  {
    id: 1,
    Date: "23 Feb 2021, 08:28 PM",
    img: product1,
    imgUser: product1,
    price: 10,
    content: "Vegetable Fritters with Egg",
    title: "Pizza",
  },
  {
    id: 1,
    Date: "23 Feb 2021, 08:28 PM",
    img: product1,
    imgUser: product1,
    price: 10,
    content: "Vegetable Fritters with Egg",
    title: "Pizza",
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
              title={order.title}
              id={order.id}
              Date={order.Date}
              img={order.img}
              price={order.price}
              content={order.content}
              imgUser={order.imgUser}
            />
          );
        })}
      </div>
    </LayoutSite>
  );
}

export default ContentOrders;
