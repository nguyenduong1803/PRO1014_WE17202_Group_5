import React from "react";
import styles from "../../OrderManager/OrderDetail/OrderDetail.module.css";
import Breadcrumbs from "../../../../components/Admin/BreadCrumb/Breadcrumb";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { selectOrder, selectOrderDetail, selectProducts } from "../../../../redux/selector";
import { getAllOrder, getDetailOrder } from "../../../../redux/SliceReducer/OrderTableSlice";
import { Button } from "@mui/material";

const OrderDetail = () => {
  const orders = useSelector(selectOrder)
  const dispatch = useDispatch()
  const orderId = window.location.pathname.split("/")[3]
  const myOder = orders?.data?.find(ele => ele.id === Number(orderId))

  const listTables = myOder?.listDetailTbInvoice?.map(item => item.id)
  const products = useSelector(selectProducts)
  const listProduct = [];
  if (products) {
    products.forEach(prod => {
      if (myOder) {
        myOder?.listDetailInvoice?.forEach(ele => {
          if (prod.id === ele.id_product) {
            let newProduct = { ...prod, quantity: ele.amount, idDetailOrder: ele.id }
            listProduct.push(newProduct);
          }
        })
      }
    });
  }

  const breadcrumItem = [
    {
      href: "/",
      title: "Quản lý",
      isActive: false,
    },
    {
      href: "/admin/quan-ly-don-hang",
      title: "Quản lý đơn hàng",
      isActive: false,
    },
    {
      href: "/admin/chi-tiet-don-hang",
      title: "Chi tiết đơn hàng",
      isActive: true,
    },
  ];
  React.useEffect(() => {
    dispatch(getAllOrder())
  }, [])
  return (
    <>
      <Sidebar />
      <div className={styles.OrderDetail}>
        <Breadcrumbs breadItem={breadcrumItem} />
        <div className={`${styles.DetailsMain} row`}>
          <div className={`${styles.leftSide} col-8`}>
            <p className={`${styles.title}`}>
              <ArrowBackIcon />
              Chi tiết hóa đơn
            </p>
          </div>
        </div>
        <div className={`${styles.Details} row mt-5`}>
          <div className={`${styles.formRow} col-md-6`}>
            <div className="mb-3">
              <label htmlFor="User" className={styles.formlabel}>
                Mã đơn hàng
              </label>
              <input
                type="text"
                id="User"
                value={myOder?.id_invoice}
                disabled
                className={styles.formcontrol}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="User" className={styles.formlabel}>
                Tên khách hàng
              </label>
              <input
                type="text"
                id="User"
                value={myOder?.user_name_book}
                disabled
                className={styles.formcontrol}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="User" className={styles.formlabel}>
                Tổng tiền
              </label>
              <input
                type="text"
                id="User"
                value={myOder?.total_price}
                disabled
                className={styles.formcontrol}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className={styles.formlabel}>
                Ngày đặt
              </label>
              <input
                type="text"
                id="Address"
                value={myOder?.time_book}
                disabled
                className={styles.formcontrol}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className={styles.formlabel}>
                Số điện thoại
              </label>
              <input
                type="text"
                id="phone"
                value={myOder?.phone}
                disabled
                className={styles.formcontrol}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.Describe}>
              <div className="mb-3" >
                <h2>Danh sách bàn đặt</h2>
                <input
                  type="text"
                  id="phone"
                  value={listTables?.join(",")}
                  disabled
                  className={styles.formcontrol}
                />
              </div>
              <div className="mb-3">
                <h3>Ghi chú</h3>
                <input
                  type="text"
                  id="phone"
                  value={myOder?.note}
                  disabled
                  className={styles.formcontrol}
                />
              </div>
              <div className="mb-3">
                <h3 style={{ margin: "12px 0" }}>Sản phẩm đã đặt</h3>
                {listProduct?.map(item => (
                  <div style={{ margin: "12px 0" }} className="d-flex  align-items-center">
                    <img className={styles.imgOrder} src={item.listsImg[0]} alt="" />
                    <div>
                      <h3>Sản phẩm : {item.name}</h3>
                      <h3>Số lượng : {item.quantity}</h3>
                    </div>

                  </div>
                ))}
              </div>
              {/* {dataProduct && dataProduct.map((e,index) => (
                <div key={index} className={styles.DescribText}>
                <div className="row d-flex border-bottom">
                  <div className={`${styles.DescribeOder} col-md-6 `}>
                    <ul>
                      <li>
                        Mã đơn hàng: <p>{e?._id}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 className={styles.unpaid}>
                      {
                        myOder.status === true ? <div style={{color: "#198754"}}>Đã giao hàng thành công</div> : <div style={{color: "#dc3545"}}>Chưa giao hàng</div>
                      }
                    </h6>
                  </div>
                </div>
                <div className="row mt-2 mb-3">
                  <div className="col-md-6 d-flex">
                    <div className={styles.DescribeImg}>
                      <img src={e?.images[0]} alt="" />
                    </div>
                    <div className={`${styles.fruit}`}>
                      <ul>
                        <li>{e?.name}</li>
                        <li>
                          Phân loại: <p>{e?.describe}</p>
                        </li>
                        <li>x{e.quantity}</li>
                      </ul>
                    </div>
                  </div>
                  <div className={`${styles.fruit1} col-md-6`}>
                    <span>{e.timeCreate}</span>
                    <p>{e.price}</p>
                  </div>
                  <div className={styles.pay}>
                    <h3>
                      Tổng số tiền : <p>{
                      myOder?.items[0].price
                      }</p>
                    </h3>
                  </div>
                </div>
              </div>   
              ))}            */}
            </div>

          </div>
          <Button color="info" variant="contained">  {myOder?.status_envoice === 2 ? "đã thanh toán" : "chưa thanh toán"}</Button>

          <div className={`${styles.from}`}></div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
