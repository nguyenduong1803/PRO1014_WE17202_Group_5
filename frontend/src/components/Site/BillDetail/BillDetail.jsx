import React from 'react'
import styles from "./BillDetail.module.css"
import { Link } from "react-router-dom"
import { formatMoney } from "../../../extensions/formatMoney"


function Bill({ bill, carts, data }) {
  const arrBill = [];
  let billMoney = 0;
  let discountMoney = 0;
  let totalMoney = 0;
  //get day
  // let today = new Date().toISOString().slice(0, 10)
  // console.log(today)
  data && data.forEach(element => {
    carts.forEach(cart => {
      if (cart.productId === element._id) {
        let newEle = { ...element, quantityCart: cart.quantity }
        arrBill.push(newEle)
      }
    });
  });
  arrBill.forEach((cart) => {
    if (cart.discount) {
      billMoney += (cart.price * cart.quantityCart * (100 - cart.discount) / 100)
      discountMoney += (cart.price * cart.quantityCart * (cart.discount) / 100)
    }
    else {
      billMoney += cart.price * cart.quantityCart
    }
    totalMoney += cart.price * cart.quantityCart
  })
  const handleSend = (e) => {
    console.log("handle Send")

  }
  return (
    <div className={styles.wrapper}>
      <div className={`container`}>
        <div className="row">
          <div className={`col-lg-7 ${styles.wrap_col} ${styles.border_right}`}>
            <div>
              <h2 className={styles.address_title}>Thông tin địa chỉ</h2>
              <p><span className={styles.bill_active}>Đặt hàng</span> \ Giao hàng \ Thanh toán</p>
              <div className={` ${styles.contact} `}>

                <ContactItem change content={`Người nhận: ${bill[0].payload}`} type="name" />
                <ContactItem change content={`Số điện thoại: ${bill[1].payload}`} type="phone" />
                <ContactItem change content={`Ship đến: ${bill[5].payload} - ${bill[4].payload} - ${bill[3].payload} - ${bill[2].payload}`} type="city" />
              </div>
              <div className={` ${styles.contact} `}>
                <ContactItem checkbox content="Miễn Phí" />
              </div>
              <div className="wrap_action">
                <Button
                  content="Tiếp tục mua hàng"
                  href="#"
                />
                <Button
                  content="Về trang thanh toán"
                  to="/thanh-toan"
                  className={styles.btn_noSetting}
                />

              </div>
            </div>
          </div>
          <div className={`col-lg-5 ${styles.wrap_col}`}>
            <div >
              {arrBill.map((product, index) => {
                if (product.quantityCart > 0) {
                  return (
                    <Productcheckout
                      key={index}
                      quantity={product.quantityCart}
                      img={product.images[0] && Object.values(product.images[0]).join('')}
                      name={product.name}
                      price={product.price}
                    />

                  )
                }
              })}
              <div className={styles.money}>
                <Money title="Tạm tính" price={`${totalMoney} đ`} />
                <Money title="Giảm giá" price={`${discountMoney} đ`} />
                <Money title="Phí vẫn chuyển" className={styles.border_bot} price="Miễn phí" />
                <Money title="Tổng tiền" className={styles.total_money} price={`${billMoney} đ`} />
              </div>
            </div>
            <Button
              onClick={(e) => handleSend(e)}
              content="Thanh toán"
              className={styles.btn_confirm}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactItem({ content, change = false, checkbox = false, type }) {
  return (
    <div className={`${styles.boxDetail} d-flex justify-content-between align-items-center`}>
      {checkbox && <div className={styles.wrap_checkbox}><input className="form-check-input" type="checkbox" value="" id="methods"></input>
        <label htmlFor="methods" className={styles.shipMethod_titile}>Tiêu chuẩn</label>
      </div>}
      <span>{content}</span>
      {change && <Link className={styles.btn_change} to={`/thanh-toan/#${type}`}>Thay đổi</Link>}
    </div>
  )
}

function Button({ to = false, href = false, className = false, content, ...props }) {
  let ButtonStyle = 'button'
  const myClass = className ? className : ""
  let proper = {
  }
  if (to) {
    ButtonStyle = Link
    proper = {
      to,
      ...props
    }
  } else if (href) {
    ButtonStyle = 'a'
    proper = {
      href,
      ...props
    }
  } else {
    proper = {
      ...props
    }
  }
  return (
    <ButtonStyle {...proper} className={`${styles.button_primary} ${myClass}`} >
      {content}
    </ButtonStyle>
  )
}

function Productcheckout({ price, name, img, quantity }) {
  return (
    <div className={`${styles.wrapproduct} ${styles.border_bot} d-flex justify-content-between align-items-center`}>
      <div className={`${styles.wrap_name_img} d-flex align-items-center`}>
        <img className={styles.imgBill} src={img} alt="" />
        <span style={{ marginLeft: " 12px" }} className={`d-inline-block`} >{name}</span>
      </div>
      <p className={styles.quantity}>x{quantity}</p>
      <span className={styles.bill_price}>{formatMoney(price)} đ</span>
    </div>
  )
}

function Money({ title, price, className }) {
  return (
    <div className={`${styles.moneyItem} ${className} d-flex justify-content-between align-items-center`}>
      <span>{title} : </span>
      <span>{formatMoney(formatMoney(price))}</span>
    </div>
  )
}
export default Bill