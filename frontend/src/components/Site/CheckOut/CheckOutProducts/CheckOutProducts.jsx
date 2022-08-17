import React from "react";
import styles from "./CheckOutProducts.module.css";
import WestIcon from "@mui/icons-material/West";

import ProductCart from "./ProductCart";
import { useSelector } from "react-redux";
import { selectCart } from "../../../../redux/selector";

function CheckOutProducts() {
  const carts = useSelector(selectCart);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>
          <WestIcon /> Tiếp tục mua hàng
        </h4>
      </div>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <div className={styles.title}>
            <h3 className={styles.titleH3}>Giỏ Hàng</h3>
            <p className={styles.titleP}>
              Bạn có {carts?.length} mặt hàng trong giỏ hàng của tôi
            </p>
          </div>
        </div>
        {carts.map((cart, index) => {
          return (
            <ProductCart
              key={index}
              name={cart.name}
              idCart={cart.id}
              content={cart.total_amount}
              img={cart.path}
              price={cart.price}
              quantity={Number(cart.total_amount)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CheckOutProducts;
