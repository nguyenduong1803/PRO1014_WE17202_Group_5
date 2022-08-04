import React from "react";
import styles from "./Cart.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import CloseIcon from '@mui/icons-material/Close';
import ProductCart from "./ProductCart";
import { useSelector } from "react-redux";
import { selectCart } from "../../../../redux/selector";
import { getToken } from '../../../../utils/Common'
import { Link } from "react-router-dom";
import { formatMoney } from "../../../../extensions/formatMoney";

function Cart() {
  const carts = useSelector(selectCart)
  let totalMoney =0
  if (carts) {
    totalMoney = carts.reduce((init, value) => init + value.price, 0)
  }
  
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <ul className={styles.navbarRight}>
            <li>
              <a href="#" id="cart">
                <LocalMallRoundedIcon color="#000" />
                {getToken() && <span className={styles.badges}>{carts && carts.length}</span>}
              </a>
            </li>
            <div className={`${styles.container} ${styles.content}`}>
              <div className={styles.shoppingCart}>
                <div className={styles.shoppingCartHeader}>
                  <i className="fa fa-shopping-cart cart-icon"></i>
                  <span className={styles.badge}>3</span>
                  <div className={styles.shoppingCartTotal}>
                    <span className={styles.lighterText}>Tổng:</span>
                    <span className={styles.mainColorText}>{formatMoney(totalMoney)} đ</span>
                  </div>
                </div>
                {getToken() ?
                  <>
                    <ul className={styles.shoppingCartItems}>
                      {carts && carts.map((cart, index) => {
                        return (
                          <ProductCart key={index} name={cart.name} idCart={cart.id} content="content" img={cart.path} price={cart.price} quantity={cart.amount} />
                        )
                      })}
                    </ul>
                    <div className={styles.footerButton}>
                      <div className=""> <a href="#" className={styles.button}>
                        Đặt hàng
                      </a></div>
                    </div>
                  </>
                  :
                  <div className={styles.shoppingCartItems}>
                    <p className={styles.cartEmpty}>Vui lòng đăng nhập</p>
                    <Link className={styles.cartRequire} to="/dang-nhap">Đăng nhập</Link>
                  </div>
                }

              </div>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Cart;
