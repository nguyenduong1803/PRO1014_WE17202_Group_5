import React from 'react'
import { formatMoney } from "../../../extensions/formatMoney"
import { Link } from "react-router-dom"
import styles from "./MiniBill.module.css"

function ProductCheckout({ name, price, quantity }) {
  const totalMoney = price * quantity
  return (
    <div className={`d-flex justify-content-between align-items-center`}>
      <p>{name}</p>
      <span>x{quantity}</span>
      <p>{formatMoney(totalMoney)} VNĐ</p>
    </div>
  )
}
function MiniBill({ data, carts, bill }) {
  const arrCheckout = [];
  let billMoney = 0;
  let discountMoney = 0;
  let totalMoney = 0;
  data && data.forEach(element => {
    carts.forEach(cart => {
      if (cart.productId === element._id) {
        let newEle = { ...element, quantityCart: cart.quantity }
        arrCheckout.push(newEle)
      }
    });
  });
  arrCheckout.forEach((cart) => {
    if (cart.discount) {
      billMoney += (cart.price * cart.quantityCart * (100 - cart.discount) / 100)
      discountMoney += (cart.price * cart.quantityCart * (cart.discount) / 100)
    } else {
      billMoney += cart.price * cart.quantityCart
    }
    totalMoney += cart.price * cart.quantityCart
  })
  const handleSubimit = e => {
    e.preventDefault();
    console.log(bill);
  }
  return (
    <div className={`col-lg-4 col-md-6 ${styles.checkoutBox}`}>
      <h3 className={`fw-bold ${styles.orderTitle}`}>Đơn hàng của bạn</h3>
      <div className={`d-flex justify-content-between align-items-center`}>
        <h5>Sản phẩm</h5>
        <h5>Giá thành</h5>
      </div>
      {arrCheckout.map((product, index) => {
        if (product.quantityCart > 0) {
          return (
            <ProductCheckout
              key={index}
              quantity={product.quantityCart}
              name={product.name}
              price={product.price}
            />
          )
        }
      })}
      <div className={`d-flex justify-content-between align-items-center`}>
        <h5>Phí vận chuyển</h5>
        <h5>Miễn Phí</h5>
      </div>
      <div className={`d-flex justify-content-between align-items-center`}>
        <h5>Tổng </h5>
        <h5>{formatMoney(totalMoney)} VNĐ</h5>
      </div>
      <div className={`d-flex justify-content-between align-items-center`}>
        <p>Giảm giá áp dụng</p>
        <p className={`text-decoration-line-through ${styles.discount}`}>- {discountMoney} VNĐ</p>
      </div>
      <div className={`d-flex justify-content-between align-items-center ${styles.total}`}>
        <h5>Tổng thanh toán</h5>
        <h5>{formatMoney(billMoney)} VNĐ</h5>
      </div>
      <div className={styles.checkoutBtn}>
        <Link
          to="/xac-nhan-don-hang" className="text-decoration-none"
          onClick={e => handleSubimit(e)}
        >Thanh toán
        </Link>
      </div>
    </div>
  )
}

export default MiniBill