import React from "react";
import { Link } from 'react-router-dom'
import styles from "./Cart.module.css";
import breadcrumb from "../../../assets/img/breadcrumb.jpg";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Footer from "../../../components/Site/Footer/Footer";
import Header from "../../../components/Site/Header/Header";
import BreadCrumbs from "../../../components/Site/BreadCrumbs/BreadCrumbs";
import QuantityCart from "./QuantityCart"
import { DataContext } from "../../../contexts/DataContext"
import { formatMoney } from "../../../extensions/formatMoney"

const breadcrumbs = [
  {
    title: "Trang Chủ",
    to: "/",
    active: false
  }, {
    title: "Giỏ hàng",
    to: "/giỏ hàng",
    active: true
  }
]

function ProductCart({ img, quantity, price, name, id, setCarts, carts }) {
  const closeRef = React.useRef();
  const handleDelete = (id) => {
    const isConfirm = window.confirm("Bạn có muốn xóa sản phẩm")
    if (isConfirm) {
      const index = carts.findIndex(ele => ele.productId === id)
      setCarts(prev => {
        prev.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(prev));
        return prev
      })
      closeRef.current.parentElement.parentElement.remove()
    }

  }
  const [quantityCart, setQuantityCart] = React.useState(quantity)
  return (
    <div className={`row ${styles.item}`}>
      <div className={`col-lg-2 col-md-3 col-sm-4 ${styles.itemImg}`}>
        <img src={img} alt="" />
      </div>
      <div className={`col-lg-2 col-md-2 col-sm-4 ${styles.itemDesc}`}>
        <p className={styles.itemName}>{name}</p>
        <p className={styles.itemCategory}>Small</p>
      </div>
      <div className={`col-lg-2 col-md-3 col-sm-4 ${styles.itemPrice}`}>{formatMoney(price)} VNĐ</div>
      <div className={`col-lg-3 col-md-4 col-sm-6 ${styles.itemQuantity}`}>
        <QuantityCart
          setCarts={setCarts}
          productId={id}
          setQuantity={setQuantityCart}
          quantity={quantityCart}
        />
      </div>
      <div className={`col-lg-2 col-md-6 col-sm-6 ${styles.itemTotal}`}>{formatMoney(price * quantityCart)} VNĐ</div>
      <div className={`col-lg-1 col-md-6 ${styles.itemButton}`}>
        <button
          onClick={() => handleDelete(id)}
          ref={closeRef}
        >
          <CloseOutlinedIcon />
        </button>
      </div>
    </div>
  )
}
function Cart() {
  const { carts, setCarts, data } = React.useContext(DataContext)
  const arrCart = [];
  data && data.forEach(element => {
    carts.forEach(cart => {
      if (cart.productId === element._id) {
        let newEle = { ...element, quantityCart: cart.quantity }
        arrCart.push(newEle)
      }
    });
  });
  return (
    <div>
      <Header position="Giỏ hàng" />
      <BreadCrumbs list={breadcrumbs} img={breadcrumb} />
      <div className="container mt-5">
        <div className={styles.listItem}>
          <div className={`row ${styles.cartTitle}`}>
            <div className="col-lg-4 col-md-5 ">Sản phẩm</div>
            <div className={`${styles.hidden__in_sm} col-lg-2 col-md-3`}>Giá thành</div>
            <div className={`${styles.hidden__in_sm} ${styles.cartTitleQuantity} col-lg-3 col-md-4 `}>Số lượng</div>
            <div className={`${styles.hidden__in_sm} col-lg-3 d-sm-none d-lg-block`}>Tổng</div>
          </div>
          {arrCart && arrCart.map((cart) => {
            return (
              <ProductCart
                key={cart._id}
                id={cart._id}
                img={cart.images[0] && Object.values(cart.images[0]).join('')}
                name={cart.name}
                price={cart.price}
                quantity={cart.quantityCart}
                setCarts={setCarts}
                carts={carts}
              />)
          })}
          <div className={styles.cartButtonGroup}>
            <Link to="/cua-hang" className={`${styles.cartbutton} ${styles.backButton}`}>Tiếp tục mua sắm</Link>
            <div className={`${styles.wrap_btn_checkout} d-flex gap-3`}>
              <Link to="/thanh-toan" className={`${styles.checkout}`}><button className={`${styles.cartbutton} ${styles.color_primary}`}>Thanh toán</button></Link>
              <button className={styles.cartbutton}>Cập nhật giỏ hàng</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
