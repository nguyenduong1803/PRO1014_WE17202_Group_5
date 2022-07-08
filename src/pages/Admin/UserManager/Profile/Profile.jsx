import React, {  useContext, } from "react";
import styles from "../Profile/Profile.module.css";
import Breadcrumbs from "../../../../components/Admin/BreadCrumb/Breadcrumb";
import { UserContext } from '../../../../contexts/UserContext';
import { OrderContext } from '../../../../contexts/OrderContext';
import OrderHistory from "./OrderItems/ordersHistory/orderHistory";
import Sidebar from "../../../../components/Admin/Sidebar/Sidebar"
const Profile = () => {
  const { user } = useContext(UserContext)
  const { orders } = useContext(OrderContext)
  // const handleSubmit = (e) => {
  //   var MaUser = document.getElementById('User').value
  //   var UserName = document.getElementById('UserName').value
  //   var Phone = document.getElementById('phone').value
  //   var Email = document.getElementById('Email').value
  //   var Address = document.getElementById('Address').value
  //   console.log({ MaUser, UserName, Phone, Email, Address });
  // }

  const breadcrumItem = [
    {
      href: "/",
      title: "Quản lý",
      isActive: false,
    },

    {
      href: "/admin/quan-ly-nguoi-dung",
      title: "Quản lý người dùng",
      isActive: false,
    },

    {
      title: "Chi tiết người dùng",
      isActive: true,
    },
  ];

  const idUser = window.location.hash.split("#")[1];
  const userInfo = user.find(e => e._id === idUser)
  const orderIds = JSON.stringify(userInfo?.orders)
  const completedOrders = orders.filter(e => orderIds?.includes(e._id)).filter(ele => ele.status)
  const inCompletedOrders = orders.filter(e => orderIds?.includes(e._id)).filter(ele => !ele.status)

  function handleDeleteUser() {
    console.log(idUser);
  }
  return (

    <>
    <Sidebar/>
    <div className={`${styles.main}  `}>
      <Breadcrumbs breadItem={breadcrumItem} />
      <div className={`${styles.content} row`}>

        <div className="col-6">
          <div className={`d-flex align-middle`}>
            <div style={{ height: `120px`, width: `120px`, border: `1px solid #fff` }}>
              <img src={userInfo?.avatar} alt="" style={{ width: `100%` }} />
            </div>
            <h2
              className={styles.name}
              style={{ fontSize: `30px`, fontWeight: `bold`, color: `#1A358F`, marginLeft: `20px` }}
            >
              {userInfo?.name}
            </h2>
          </div >

          <label htmlFor="phone" className={styles.formlabel} style={{ marginTop: `40px` }} >
            Số điện thoại
          </label>
          <input
            type="text"
            id="phone"
            value={userInfo?.phone}
            disabled
            className={styles.formcontrol}
          />

          <label htmlFor="User" className={styles.formlabel}>
            Ngày tháng năm sinh
          </label>
          <input type="text" id="User" value={userInfo?.dob} disabled className={styles.formcontrol} />


          <label htmlFor="UserName" className={styles.formlabel}>
            Ngày tạo tài khoản
          </label>
          <input type="text" id="UserName" value={userInfo?.createdAt} disabled className={styles.formcontrol} />

          <label htmlFor="Address" className={styles.formlabel}>
            Địa chỉ
          </label>
          <input type="text" id="Address" value={userInfo?.address} disabled className={styles.formcontrol} />

          <label htmlFor="Email" className={styles.formlabel}>
            Email
          </label>
          <input
            type="email"
            id="Email"
            value={userInfo?.email}
            disabled
            className={styles.formcontrol}
          />

          <label htmlFor="Email" className={styles.formlabel}>
            Số đơn hàng đã đặt
          </label>
          <input
            type="number"

            value={orders.filter(e => orderIds?.includes(e._id)).length}
            disabled
            className={styles.formcontrol}
          />

        </div>
        <div className="col-6">
          <h2 style={{ fontWeight: `600`, marginBottom: `10px` }}>
            Lịch sử mua hàng
          </h2>

          <div className={styles.ordersHistory}>
            {
              inCompletedOrders.length && completedOrders.length
                ?
                <>
                  <OrderHistory orders={inCompletedOrders} />
                  <OrderHistory orders={completedOrders} />
                </>
                :
                <h2 style={{ textAlign: `center`, fontWeight: `600`, fontSize: ` 24px`, padding: `50px` }}>Người dùng này chưa đặt đơn hàng nào</h2>
            }

          </div>
        </div>
        <div className={`${styles.btn} row`}>
          <button
            className={styles.ProfiLRBtn}
            data-toggle="modal"
            data-target="#comfirmModal"
          >
            Xóa tài khoản
          </button>
          <div className="modal fade" id="comfirmModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h5
                    className="modal-title"
                    style={{ fontSize: `20px`, color: `var(--purple)` }}
                  >Thông báo</h5>
                </div>
                <div className="modal-body text-center">
                  <p>Bạn có chắc muốn xoá người dùng</p>
                  <p style={{ marginTop: `10px`, fontWeight: `600`, fontSize: `18px`, color: `var(--purple)` }}>
                    {userInfo?.name}
                  </p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-danger" data-dismiss="modal" onClick={handleDeleteUser}>
                    Xác nhận xoá
                  </button>
                  <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Huỷ</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*         
        <div className={`${styles.ProfileCRUD} row`}>
          <div className="col-6">
            <button className={styles.ProfiLRBtn}>Xóa tài khoản</button>
          </div>
          <div className="col-6">
            <div className={styles.right}>
              <button className={styles.ProfiLRBtn1} onClick={handleSubmit}>Cập nhật</button>
              <button className={styles.ProfiLRBtn2}>Đóng</button>
            </div>
          </div>
        </div> */}
      </div>


    </div >
    </>
  );
};

export default Profile;
