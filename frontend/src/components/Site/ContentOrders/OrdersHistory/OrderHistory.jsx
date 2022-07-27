import React from "react";
import styles from "./OrderHistory.module.css";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
function OrderHistory({ id, img, name, phone, imgUser, Date, ban,money,totalUser }) {
  return (
    <div className="col-lg-3">
      <div className={styles.orderHistory}>
        <div className={styles.orderIdHeader}>
          <div className={styles.orderIdHeaderLeft}>
            <div>Orders #{id}</div>
            <div className={styles.date}>{Date}</div>
          </div>
          <div className={styles.orderIdHeaderRight}>
            <img src={img} alt="" />
          </div>
        </div>
        <div className={`${styles.orderIdContent} col-lg-3`}>
          <div className={styles.orderIdContentLeft}>
            <img src={imgUser} alt="" />
          </div>
          <div className={styles.orderIdContentRight}>
            <h4>Tên : {name}</h4>
            <div>
              <div>SDT : {phone}</div>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={`${styles.orderIdContent} col-lg-3`}>
          <div className={styles.orderIdContentLeft}>
            <img src={imgUser} alt="" />
          </div>
          <div className={styles.orderIdContentRight}>
            <h4>Bàn : {ban}</h4>
            <div className={styles.priceNumber}>
              <h4>Số khách :{totalUser}</h4>
              <h4>Tổng tiền :{money} đ</h4>
            </div>
          </div>
        </div>
        <div className={styles.lines}></div>
        <div className={styles.orderIdFooter}>
          <div className={styles.orderIdFooterLeft}>
            <p classs={styles.items}>
            <Button variant="contained" color="success" className={styles.button}>
                Đã Thanh Toán
              </Button>
            </p>
            {/* <br />
            <p classs={styles.items}>
            <Button color="secondary" variant="contained" className={styles.buttons}>Đã Đặt</Button>

            </p>
            <br />
            <p classs={styles.items}>
              {" "}
              <Button variant="contained" color="error" className={styles.button}>
                Đang Ăn
              </Button>
            </p>{" "}
            <br /> */}
          </div>
          <div className={styles.orderIdFooterRight}>
          <Button variant="contained" className={styles.buttonLink}>
                 <Link to="/chi-tiet-hoa-don">Xem Chi Tiết</Link>
              </Button>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
