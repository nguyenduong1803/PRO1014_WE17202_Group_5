import React, { useState } from "react";
import OrdersHistory from "../ContentOrders/OrdersHistory/OrderHistory";
import product1 from "../../../../src/assets/img/seafood-1.jpg";
import LayoutSite from "../LayoutSite/LayoutSite";
import { useDispatch, useSelector } from "react-redux";
import { selectOrder, selectOrderPage, selectRoleUser } from "../../../redux/selector";
import { getAllOrder, getOrder } from "../../../redux/SliceReducer/OrderTableSlice";
import { Pagination, Stack } from "@mui/material";

function ContentOrders() {
  const dispatch = useDispatch()
  const orders = useSelector(selectOrder)
  const role = useSelector(selectRoleUser)
  const lastPage = useSelector(selectOrderPage);
  const [page, setPage] = useState(1)
  const [status, setStatus] = useState("")
  const handerChange = (e) => {
    setPage(e.target.innerText)
  }
  React.useEffect(() => {
    if (role === 1 || role === 3) {
      dispatch(getAllOrder({ page, status }))
    } else {
      dispatch(getOrder())
    }
  }, [page, status,role])
  return (
    <LayoutSite>
      <h2>Order History</h2>
      <div style={{width: '200px',margin:"24px 0"}}>
        <select onChange={e => setStatus(e.target.value)} class="form-select" aria-label="Default select example">
          <option value="" selected>Sắp xếp</option>
          <option value="1">Chưa thanh toán</option>
          <option value="2">Đã thanh toán</option>
          <option value="3"></option>
        </select>
      </div>
      <div className="row" style={{ zIndex: "10", position: "relative" }}>
        {orders ?
          orders?.data?.map(order => {
          const  listTables =order.listDetailTbInvoice.map(item=>item.id_table)
            return (
              <OrdersHistory
                key={order.id}
                name={order.user_name_book}
                id={order.id_invoice}
                date={order.time_book}
                phone={order.phone}
                totalUser={22}
                imgUser={product1}
                ban={listTables||[]}
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
      <div className="d-flex justify-content-end" style={{margin:"24px 0"}}>
        <Stack spacing={2} >
          <Pagination count={lastPage} color="primary" onChange={e => handerChange(e)} />
        </Stack>
      </div>
    </LayoutSite>
  );
}

export default ContentOrders;
