import React from "react";
import styles from "./Cart.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from '@mui/icons-material/Close';
import ProductCart from "./ProductCart";
import { useSelector } from "react-redux";
import { selectCart } from "../../../../redux/selector";
function Cart() {
  const carts = useSelector(selectCart)

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <ul className={styles.navbarRight}>
            <li>
              <a href="#" id="cart">
                <ShoppingCartIcon />
                {/* <span className={styles.badge}>3</span> */}

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
                  {carts && carts.map((cart, index) => {
                    return (
                      <ProductCart key={index} name={cart.name} idCart={cart.id} content="content" img={cart.path} price={cart.price} quantity={cart.amount} />
                    )
                  })}
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
