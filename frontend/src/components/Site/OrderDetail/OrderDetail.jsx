import React from "react";
import InformationUser from "./InformationUser/InformationUser";
import LayoutSite from "../LayoutSite/LayoutSite";
import ListOrder from "../OrderDetail/ListOrders/ListOrders";
import Status from "../OrderDetail/StatusOrders/StatusOrders";
// import Statistical from "./Statistical/Statistical";
import UpdateProduct from "./ListOrders/UpdateProduct"
import { selectOrder, selectRoleUser } from "../../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { getAllOrder, getOrder } from "../../../redux/SliceReducer/OrderTableSlice";
function OrderDetail() {
  const [showModal, setShowModal] = React.useState(false)
  const orders = useSelector(selectOrder)
  const dispatch= useDispatch()
  const role = useSelector(selectRoleUser)
  const orderId = window.location.pathname.split("/")[2]
  const myOder = orders?.data?.find(ele => ele.id_invoice === orderId)
  React.useEffect(() => {
    if (role === 1 || role === 3) {
      dispatch(getAllOrder())
    } else {
      dispatch(getOrder())
    }
  },[role])
  return (
    <LayoutSite>
      <div className="row">
        <div className="col-lg-3">
          <InformationUser
            id={1}
            img={""}
            orders={myOder}
          />
          {/* <div>
            <Statistical />
          </div> */}
        </div>
        <div className="col-lg-9">
          <ListOrder />
          {((role === 3 || role === 1) && myOder?.status_envoice === 1) &&
            <div style={{ margin: "24px 0" }}> <Button onClick={() => setShowModal(true)} variant="contained" >Chọn Thêm Sản Phẩm</Button></div>
          }
          {showModal && <UpdateProduct setShowModal={setShowModal} />}

          <Status myOder={myOder} />
        </div>
      </div>
    </LayoutSite>
  );
}

export default OrderDetail;
