import React from "react";
import OrdersHistory from "../ContentOrders/OrdersHistory/OrderHistory";
import product1 from "../../../../src/assets/img/seafood-1.jpg";
import LayoutSite from "../LayoutSite/LayoutSite";
import {  useDispatch, useSelector } from "react-redux";
import { selectOrder, selectRoleUser } from "../../../redux/selector";
import { getAllOrder, getOrder } from "../../../redux/SliceReducer/OrderTableSlice";

function ContentOrders() {
  const dispatch = useDispatch()
  const orders = useSelector(selectOrder)
  const role = useSelector(selectRoleUser)

React.useEffect(()=>{
  console.log(role)
  if (role === 1 || role === 3) {
    dispatch(getAllOrder())
} else {
    dispatch(getOrder())
}
},[])
  return (
    <LayoutSite>
      <h2>Order History</h2>
      <div className="row" style={{ zIndex: "10", position: "relative" }}>
        {orders ?
          orders?.map(order => {
            return (
              <OrdersHistory
                key={order.id}
                name={order.user_name_book}
                id={order.id}
                date={order.time_book}
                img={product1}
                phone={order.phone}
                totalUser={22}
                imgUser={product1}
                ban={[1, 2]}
                money={order.total_price}
                status={order.status_envoice}
                idInvoice={order.id_invoice}
                note={order.note}
              />)
          })
          : <h2>Bạn chưa có order nào</h2>}
        {/* );
        })} */}
      </div>
    </LayoutSite>
  );
}

export default ContentOrders;
