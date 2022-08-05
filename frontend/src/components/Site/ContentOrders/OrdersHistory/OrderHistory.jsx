import React from "react";
import styles from "./OrderHistory.module.css";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import { formatMoney } from "../../../../extensions/formatMoney";
function OrderHistory({ id, idInvoice, name, phone, status, date, ban, money, totalUser, note }) {
  return (
    <div className="col-lg-3 col-md-4">
      <div className={styles.orderHistory}>
        <div className={styles.orderIdHeader}>
          <div className={styles.orderIdHeaderLeft}>
            <div>Orders #{id}</div>
            <div className={styles.date}>{date}</div>
          </div>

        </div>
        <div className={`${styles.orderIdContent} col-lg-3`}>
          <div className={styles.orderIdContentLeft}>
            <Avatar />
          </div>
          <div className={styles.orderIdContentRight}>
            <h2>Tên : {name}</h2>
            <h2>SDT : {phone}</h2>
            <h2>Ghi chú : {note}</h2>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={`${styles.orderIdContent} col-lg-3`}>
          <div className={styles.orderIdContentLeft}>
            <TableRestaurantIcon fontSize="large" />
          </div>
          <div className={styles.orderIdContentRight}>
            <h2>Bàn : {ban}</h2>
            <div className={styles.priceNumber}>
              <div><h3>Số khách :</h3> <span>{totalUser}</span></div>
              <div><h3>Tổng tiền :</h3> <span>{formatMoney(money)} đ</span></div>
            </div>
          </div>
        </div>
        <div className={styles.lines}></div>
        <div className={styles.orderIdFooter}>
          <div className={styles.orderIdFooterLeft}>

            {
              status === 1 ?
                <button color="secondary" className={styles.buttons} disabled>Đã Đặt</button>
                :
                <Button variant="contained" color="success" className={styles.button} disabled>
                  Đã Thanh Toán
                </Button>
            }

            {/* <br />
            <p classs={styles.items}>
          
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
              <Link to={`/chi-tiet-hoa-don/${idInvoice}`}>Xem Chi Tiết</Link>
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
