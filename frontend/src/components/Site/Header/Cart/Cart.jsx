import React from "react";
import styles from "./Cart.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from '@mui/icons-material/Close';
function Cart() {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <ul className={styles.navbarRight}>
            <li>
              <a href="#" id="cart">
                <ShoppingCartIcon />
                <span className={styles.badges}>3</span>

              </a>
            </li>
            <div className={`${styles.container} ${styles.content}`}>
              <div className={styles.shoppingCart}>
                <div className={styles.shoppingCartHeader}>
                  <i class="fa fa-shopping-cart cart-icon"></i>
                  <span className={styles.badge}>3</span>
                  <div className={styles.shoppingCartTotal}>
                    <span className={styles.lighterText}>Tổng:</span>
                    <span className={styles.mainColorText}>$2,229.97</span>
                  </div>
                </div>

                <ul className={styles.shoppingCartItems}>
                  <li className={styles.clearfix}>
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg"
                      alt="item1"
                    />
                    <span className={styles.itemName}>Sony DSC-RX100M III</span>
                    <span className={styles.itemPrice}>$849.99</span>
                    <span className={styles.itemQuantity}>Số lượng : 01</span>
                    <span className={styles.CloseIcon}><CloseIcon/></span>
                  </li>
                  <li className={styles.clearfix}>
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg"
                      alt="item1"
                    />
                    <span className={styles.itemName}>Sony DSC-RX100M III</span>
                    <span className={styles.itemPrice}>$849.99</span>
                    <span className={styles.itemQuantity}>Số lượng : 01</span>
                    <span className={styles.CloseIcon}><CloseIcon/></span>
                  </li>
                  <li className={styles.clearfix}>
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg"
                      alt="item1"
                    />
                    <span className={styles.itemName}>Sony DSC-RX100M III</span>
                    <span className={styles.itemPrice}>$849.99</span>
                    <span className={styles.itemQuantity}>Số lượng : 01</span>
                    <span className={styles.CloseIcon}><CloseIcon/></span>
                  </li>
                </ul>

               <div className={styles.footerButton}>
                <div className=""> <a href="#" className={styles.button}>
                  Checkout
                </a></div>
                <div className=""> <a href="#" className={styles.button}>
                  Checkout
                </a></div>
               </div>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Cart;
