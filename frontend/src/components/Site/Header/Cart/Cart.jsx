import React, { useState } from "react";
import styles from "./Cart.module.css";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import ProductCart from "./ProductCart";
import { useSelector } from "react-redux";
import { selectCart } from "../../../../redux/selector";
import { getToken } from "../../../../utils/Common";
import { Link } from "react-router-dom";
import { formatMoney } from "../../../../extensions/formatMoney";
import { useEffect } from "react";

function Cart() {
  const carts = useSelector(selectCart);
  const [dataCarts, setDataCarts] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setDataCarts(carts);
  }, [carts]);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < dataCarts.length; i++) {
      sum += Number(dataCarts[i].price) * Number(dataCarts[i].total_amount);
    }
    setTotalPrice(sum);
  }, [dataCarts]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <ul className={styles.navbarRight}>
            <li>
              <a href="#" id="cart">
                <LocalMallRoundedIcon color="#000" />
                {getToken() && (
                  <span className={styles.badges}>{carts && carts.length}</span>
                )}
              </a>
            </li>
            <div className={`${styles.container} ${styles.content}`}>
              <div className={styles.shoppingCart}>
                <div className={styles.shoppingCartHeader}>
                  <i className="fa fa-shopping-cart cart-icon"></i>
                  <span className={styles.badge}>3</span>
                  <div className={styles.shoppingCartTotal}>
                    <span className={styles.lighterText}>Tổng:</span>
                    <span className={styles.mainColorText}>
                      {formatMoney(totalPrice)} đ
                    </span>
                  </div>
                </div>
                {getToken() ? (
                  <>
                    <ul className={styles.shoppingCartItems}>
                      {dataCarts.map((cart, index) => {
                        return (
                          <ProductCart
                            key={index}
                            name={cart.name}
                            idCart={cart.id}
                            content="content"
                            img={cart.path}
                            price={cart.price}
                            quantity={Number(cart.total_amount)}
                          />
                        );
                      })}
                    </ul>
                    <div className={styles.footerButton}>
                      <div className="">
                        {" "}
                        <Link to="/dat-hang" className={styles.button}>
                          Đặt hàng
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className={styles.shoppingCartItems}>
                    <p className={styles.cartEmpty}>Vui lòng đăng nhập</p>
                    <Link className={styles.cartRequire} to="/dang-nhap">
                      Đăng nhập
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Cart;
