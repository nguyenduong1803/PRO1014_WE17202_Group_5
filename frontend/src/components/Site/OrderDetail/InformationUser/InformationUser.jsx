import React from "react";
import styles from "./InformationUser.module.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux"
import { selectRoleUser } from "../../../../redux/selector";
import ModalForm from "./ModalForm";
import Button from '@mui/material/Button';
import ModalPayment from "./ModalPayment";
import { formatMoney } from "../../../../extensions/formatMoney";

function InformationUser({ orders, listTables }) {
  const [open, setOpen] = React.useState(false);
  const [openPay, setOpenPay] = React.useState(false);
  const role = useSelector(selectRoleUser)
  const handleOpen = () => {
    setOrder(prev => {
      return { ...prev, status: 1 }
    })
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const [order, setOrder] = React.useState({
    tableId: [3, 4, 5],
    name: orders?.user_name_book,
    phone: orders?.phone,
    celendar: orders?.time_book,
    note: orders?.note,
    status: orders?.status_envoice,
    validateTime: ""
  });
  const [notify, setNotify] = React.useState({
    name: "",
    phone: "",
    celendar: "",
    countGuest: "",
    validateTime: "",
    note: "",
  })
  const handleClickOpen = () => {
    setOpenPay(true);
    setOrder(prev => {
      return { ...prev, status: 2 }
    })
  };

  return (
    <div className={styles.member}>
      <div className={styles.info}>
        <div className={styles.wrapAvatar}><Avatar /></div>
        <p className={styles.contacts}>
          Khách hàng : <span className={styles.customInfo}>{order?.name || orders?.user_name_book}</span>
        </p>
        <span>Bàn: {listTables?.map(item => <span className={styles.customInfo}>{item},</span>)}</span>
        <p className={styles.contacts}>
          Số điện thoại:  <span className={styles.customInfo}>{order?.phone || orders?.phone}</span>
        </p>
        <p className={styles.contacts}>
          Thời gian đặt: <span className={styles.customInfo}>{order?.celendar || orders?.time_book}</span>
        </p>
      </div>
      <div>
        <h4 className={styles.contacts}>Ghi chú: </h4>
        <span className={styles.contacts}>{order?.note || orders?.note}</span>
      </div>
      <div>
        <h3 className={styles.contacts}>Tổng thanh toán: </h3>
        <p className={styles.customInfo}>{orders && formatMoney(orders?.total_price)} đ</p>
      </div>
      {
        ((role === 3 || role === 1) && orders?.status_envoice === 1) && <div style={{ margin: "24px 0" }} className="d-flex justify-content-between align-items-center">
          <Button onClick={handleOpen} variant="outlined">Sửa thông tin</Button>
          <Button onClick={handleClickOpen} variant="outlined" color="success"  >Thanh toán</Button>

        </div>
      }
      <ModalForm
        setNotify={setNotify}
        notify={notify}
        handleClose={handleClose}
        open={open}
        setOrder={setOrder}
        order={order}
        id={orders?.id}
        listTables={listTables}
      />
      <ModalPayment
        setOpenPay={setOpenPay}
        openPay={openPay}
        orders={orders}
        order={order}
        id={orders?.id}
        setOrder={setOrder}
      />
    </div>
  );
}

export default InformationUser;
