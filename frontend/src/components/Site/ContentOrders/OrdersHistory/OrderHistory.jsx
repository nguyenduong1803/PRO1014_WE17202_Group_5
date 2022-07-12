import React from "react";
import styles from "./OrderHistory.module.css";
function OrderHistory({id,img,title,content,price,imgUser,Date}) {
  return (
    <div className="col-lg-4">
      <div className={styles.orderHistory}>
        <div className={styles.orderIdHeader} >
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
                <h4>{title}</h4>
                <p>{content}</p>
                <div className={styles.priceNumber}>
                    <div>{price}</div>
                    <div>Qty : 1</div>
                </div>
            </div>
        </div>
        <div className={styles.line}></div>
        <div className={`${styles.orderIdContent} col-lg-3`}>
            <div className={styles.orderIdContentLeft}>
                <img src={imgUser} alt="" />
            </div>
            <div className={styles.orderIdContentRight}>
                <h4>{title}</h4>
                <p>{content}</p>
                <div className={styles.priceNumber}>
                    <div>{price}</div>
                    <div>Qty : 1</div>
                </div>
            </div>
        </div>
        <div className={styles.lines}></div>
        <div className={styles.orderIdFooter}>
            <div className={styles.orderIdFooterLeft}>
                <h4>items X2</h4>
                <p>{price}</p>
            </div>
            <div className={styles.orderIdFooterRight}>
                <p>Icon</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
