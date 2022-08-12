import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import ErrorIcon from "@mui/icons-material/Error";
import styles from "./PayFailed.module.css";
import {Link} from 'react-router-dom';
function PayFailed() {
  return (
    <div className={styles.boxx}>
      <div className={styles.boxHeader}>
        <div className={styles.previous}>
          <ArrowBackIosNewIcon />
        </div>
        <div className={styles.logo}><img src="http://localhost:3000/static/media/logoSea.2de16c4364ff8f63f2a4.png"  alt="" /></div>
        <div>
          <ErrorIcon className={styles.icon} style={{height:'130px',width:'130px'}}/>
        </div>
        <div className={styles.button}>
          {" "}
          <Button variant="contained">Thanh Toán Thất Bại</Button>
        </div>
        <div className={styles.content}>
          Vui lòng kiểm tra lại thông tin đặt hàng
        </div>
      </div> <div className={styles.home}>
       <Link to='/'> <Button>Về Trang Chủ</Button></Link></div>
    </div>
  );
}

export default PayFailed;
