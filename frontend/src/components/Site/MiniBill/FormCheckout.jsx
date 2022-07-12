import { style } from '@mui/system'
import React from 'react'
import styles from "./MiniBill.module.css"
function FormCheckout({ bill, setBill }) {
  const [name, phone, city, district, commune, detail] = bill
  const changePosition = window.location.hash.split("#")[1]
  return (
    <form className={`col-lg-8 col-md-6 ${styles.checkoutForm}`}>
      <div
        className={`d-flex justify-content-between align-items-center ${styles.checkoutFormWrapper}`}
      >
        <div className="position-relative">
          <label htmlFor="name" className={styles.label_name}>Họ và tên</label>
          <input
            autoFocus={changePosition === name.name}
            value={name.payload}
            onChange={(e) => setBill(prev => { prev[0] = { ...prev[0], payload: e.target.value }; return [...prev] })}
            type="text"
            placeholder="Nhập tên người nhận"
            name="name"
            id="fullName"
          />
          {name.notify && <span className={styles.notify}>{name.notify}</span>}
        </div>
        <div className="position-relative">
          <label htmlFor="phone" className={styles.label_name}>Số điện thoại</label>
          <input
            autoFocus={changePosition === phone.name}
            onChange={(e) => setBill(prev => { prev[1] = { ...prev[1], payload: e.target.value }; return [...prev] })}
            type="phone"
            value={phone.payload}
            placeholder="Nhập số điện thoại người nhận"
            name="phone"
            id="phone"
          />
        </div>
      </div>

      <div className="position-relative">
        <label htmlFor="city">Tỉnh/ Thành phố</label>
        <input
          className={style.inputForm}
          autoFocus={changePosition === city.name}
          onChange={(e) => setBill(prev => { prev[2] = { ...prev[2], payload: e.target.value }; return [...prev] })}
          value={city.payload}
          type="text"
          placeholder="Nhập tỉnh/ thành phố"
          name="city"
          id="city"
        />
      </div>
     <div className="position-relative">
        <label htmlFor="district">Quận/ Huyện</label>
        <input
          className={style.inputForm}
          onChange={(e) => setBill(prev => { prev[3] = { ...prev[3], payload: e.target.value }; return [...prev] })}
          value={district.payload}
          type="text"
          placeholder="Nhập quận/ huyện"
          name="district"
          id="district"
        />
     </div>
    <div className="position-relative">
        <label htmlFor="wards">Phường/ Xã</label>
        <input
          className={style.inputForm}
          onChange={(e) => setBill(prev => { prev[4] = { ...prev[4], payload: e.target.value }; return [...prev] })}
          value={commune.payload}
          type="text"
          placeholder="Nhập phường/ xã"
          name="wards"
          id="wards"
        />
    </div>
    <div className="position-relative">
        <label htmlFor="number">Số nhà, thôn, xóm</label>
        <input
          className={style.inputForm}
          onChange={(e) => setBill(prev => { prev[5] = { ...prev[5], payload: e.target.value }; return [...prev] })}
          value={detail.payload}
          type="text"
          placeholder="Số nhà, thôn, xóm"
          name="number"
          id="number"
        />
    </div>
    </form>
  )
}

export default FormCheckout