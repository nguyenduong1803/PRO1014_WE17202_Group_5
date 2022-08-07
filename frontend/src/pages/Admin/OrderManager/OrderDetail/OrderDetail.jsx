import React from "react";
import styles from "../../OrderManager/OrderDetail/OrderDetail.module.css";
import Breadcrumbs from "../../../../components/Admin/BreadCrumb/Breadcrumb";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const OrderDetail = () => {
  const idOrder = window.location.hash.split("#")[1];
  
const orderDetail = {}
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

  return (
    <>
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
                value={orderDetail?.id}
                disabled
                className={styles.formcontrol}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="User" className={styles.formlabel}>
                Tên đơn hàng
              </label>
              <input
                type="text"
                id="User"
                value={orderDetail?.name}
                disabled
                className={styles.formcontrol}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="User" className={styles.formlabel}>
                Email
              </label>
              <input
                type="text"
                id="User"
                value={orderDetail?.email}
                disabled
                className={styles.formcontrol}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className={styles.formlabel}>
                Địa chỉ
              </label>
              <input
                type="text"
                id="Address"
                value={orderDetail?.address}
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
                value={orderDetail?.phoneNumber}
                disabled
                className={styles.formcontrol}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.Describe}>
              <h2>Mô tả chi tiết đơn hàng</h2>
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
                        orderDetail.status === true ? <div style={{color: "#198754"}}>Đã giao hàng thành công</div> : <div style={{color: "#dc3545"}}>Chưa giao hàng</div>
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
                      orderDetail?.items[0].price
                      }</p>
                    </h3>
                  </div>
                </div>
              </div>   
              ))}            */}
            </div>
          </div>

          <div className={`${styles.from}`}></div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
