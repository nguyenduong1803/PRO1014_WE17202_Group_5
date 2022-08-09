import React from "react";
import styles from "./InformationUser.module.css";
import { Avatar } from "@mui/material";
function InformationUser({ img, name, content, time, contacts }) {
  return (
      <div className={styles.member}>
        <div className={styles.info}>
          <div className={styles.wrapAvatar}><Avatar/></div>
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
      </div>
  );
}

export default InformationUser;
