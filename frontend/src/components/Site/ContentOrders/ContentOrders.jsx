import React from "react";
import OrdersHistory from "../ContentOrders/OrdersHistory/OrderHistory";
import product1 from "../../../../src/assets/img/seafood-1.jpg";
import LayoutSite from "../LayoutSite/LayoutSite";
import { useDispatch, useSelector } from "react-redux";
import { selectOrder } from "../../../redux/selector";
const ordersHistory = [
  {
    id: 1,
    Date: "23 Feb 2021, 08:28 PM",
    img: product1,
    imgUser: product1,
    phone: 789,

    name: "Hòa Trần",
    ban: 'A12'
  },
  {
    id: 1,
    Date: "23 Feb 2021, 08:28 PM",
    img: product1,
    imgUser: product1,
    phone: 789,

    name: "Hữu Dương",
    ban: 'A12'
  },
  {
    id: 1,
    Date: "23 Feb 2021, 08:28 PM",
    img: product1,
    imgUser: product1,
    phone: 123,

    name: "Pizza",
    ban: 'A12'
  },
  {
    id: 1,
    Date: "23 Feb 2021, 08:28 PM",
    img: product1,
    imgUser: product1,
    phone: 789,

    name: "Pizza",
    ban: 'A12'
  },
];
function ContentOrders() {
  const dispatch = useDispatch()
  const orders = useSelector(selectOrder)
  console.log(orders)
  return (
    <LayoutSite>
      <h2>Order History</h2>
      <div className="row" style={{ zIndex: "10", position: "relative" }}>
        {/* {orders && orders.map((order, index) => {
          return ( */}

          {orders?  <OrdersHistory
              // key={index}
              name={"Dương nguyễn"}
              id={orders.id}
              Date={"27/7/2022 9:10"}
              img={product1}
              phone={"1234432"}
              totalUser={orders.total_user}
              imgUser={product1}
              ban={orders.index_table}
              money={orders.total_price}
            />:<h2>Bạn chưa có order nào</h2>}
          {/* );
        })} */}
      </div>
    </LayoutSite>
  );
}

export default ContentOrders;
