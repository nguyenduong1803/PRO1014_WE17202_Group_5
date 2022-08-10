import React from "react";
import styles from "./InformationUser.module.css";
import { Avatar } from "@mui/material";
import StepperEditor from "./StepperEditor";
function InformationUser({ id, name, content, time, contacts }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [modalShow, setModalShow] = React.useState(false)
  const [notifyOrder, setNotifyOrder] = React.useState({ type: "info", title: "Bàn đã có khách đặt " });

  const handleShowOrder = () => {
    setModalShow(1)
  }
  const handleClick = (e) => {
    e.stopPropagation()
  }
  const handleClose = () => {
    setModalShow(0)
  }
  return (
    <div className={styles.member}>
      <div className={styles.info}>
        <div className={styles.wrapAvatar}><Avatar /></div>
        <p className={styles.contacts}>
          Khách hàng : <span className={styles.customInfo}>{name}</span>
        </p>
        <p className={styles.contacts}>
          Số điện thoại:  <span className={styles.customInfo}>{contacts}</span>
        </p>
        <p className={styles.contacts}>
          Thời gian đặt: <span className={styles.customInfo}>{time}</span>
        </p>
      </div>
      <div>
        <h4>Ghi chú: </h4>
        <p className={styles.contacts}>{content}</p>
      </div>
      <p onClick={()=>setModalShow(true)}>Sửa thông tin</p>
      {modalShow && <StepperEditor setActiveStep={setActiveStep} activeStep={activeStep} setModalShow={setModalShow} id={1} setNotifyOrder={setNotifyOrder}/>}
    </div>
  );
}

export default InformationUser;
