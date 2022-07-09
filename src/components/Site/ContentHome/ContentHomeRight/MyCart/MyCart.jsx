import React from "react";
import styles from "./MyCart.module.css";
function MyCart({ img, title, price }) {
  return (
    <div className={styles.MyCart}>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
}

export default MyCart;
