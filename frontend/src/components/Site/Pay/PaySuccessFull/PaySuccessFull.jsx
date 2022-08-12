import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import styles from "./PaySuccessFull.module.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Link} from 'react-router-dom';

function PaySuccessFull() {
  return (
    <div className={styles.boxx}>
      <div className={styles.boxHeader}>
        <div className={styles.previous}>
          <ArrowBackIosNewIcon />
        </div>
        <div className={styles.logo}><img src="http://localhost:3000/static/media/logoSea.2de16c4364ff8f63f2a4.png"  alt="" /></div>
        <div>
          <CheckCircleIcon className={styles.icon} style={{height:'130px',width:'130px'}}/>
        </div>
        <div className={styles.button}>
          {" "}
          <Button variant="contained">Thanh Toán Thành Công</Button>
        </div>
        <div className={styles.content}>
          Cảm ơn bạn đã tin tưởng !!!
        </div>
      </div> <div className={styles.home}>
      <Link to='/'> <Button>Về Trang Chủ</Button></Link></div>
    </div>
  );
}

export default PaySuccessFull;
