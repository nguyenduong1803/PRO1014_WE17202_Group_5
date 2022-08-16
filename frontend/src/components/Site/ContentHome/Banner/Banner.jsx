import React from 'react'
import styles from './Banner.module.css';
import SvgIcon from '../../../../../src/assets/svg/SvgIcon';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// import banner from '../../../../assets/img/01.png';
function Banner() {
  return (
    <div className={styles.Banner}>
      <div className={styles.img}>
        {/* <img src={banner} alt="" /> */}
      </div>
      <div className={styles.content}>
        <p className={styles.deal}><SvgIcon className={styles.SvgIcon} />Ưu đãi cuối tuần</p>
        <h3 className={styles.contents}>Chào mừng bạn đến với nhà hàng !!!</h3>
        
        <div className="d-flex align-items-center"><PhoneNumber fill="red" /> <span className={styles.phoneNumber}>0982967644</span></div>
        <Link to='/dat-ban'>
          <button className={`${styles.custom_btn} ${styles.btn_11}`}> Đặt bàn ngay<div className={styles.dot}></div></button>
        </Link>
      </div>
    </div>
  )
}

const PhoneNumber = (props) => (
  <div className={styles.phone} >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 82 82"
      style={{
        enableBackground: "new 0 0 82 82",
      }}
      xmlSpace="preserve"
      {...props}
    >
      <path d="M64.5 78.2c1.7-1.9 3.6-3.6 5.4-5.4 2.6-2.7 2.7-5.9 0-8.6-3.1-3.2-6.3-6.3-9.4-9.4-2.6-2.6-5.8-2.6-8.4 0-2 1.9-3.9 3.9-5.9 5.9-.1.1-.3.2-.4.3l-1.3 1.3c-.4.2-.7.2-1.2 0-1.3-.7-2.6-1.2-3.8-2-5.7-3.6-10.5-8.2-14.7-13.4-2.1-2.6-4-5.3-5.3-8.4-.2-.5-.2-.9.1-1.3l1.3-1.3c.1-.1.1-.2.2-.3.6-.6 1.2-1.1 1.8-1.7 1.4-1.3 2.7-2.7 4.1-4.1 2.7-2.7 2.7-5.9 0-8.6l-4.6-4.6-4.8-4.8c-2.6-2.5-5.8-2.5-8.4 0-2 1.9-3.9 3.9-5.9 5.9-1.9 1.8-2.8 3.9-3 6.5-.3 4.1.7 8 2.1 11.8C5.2 43.8 9.6 50.7 15 57.1c7.2 8.6 15.9 15.4 26 20.4 4.6 2.2 9.3 3.9 14.4 4.2 3.5.1 6.6-.7 9.1-3.5zM41.1 15.7c-.7 0-1.5.1-2.2.4-1.7.8-2.5 2.8-2 4.8.4 1.8 2 3 3.9 3 4.6.1 8.6 1.5 12 4.6 3.7 3.4 5.4 7.7 5.6 12.8 0 .9.4 1.9.9 2.6 1.1 1.5 3 1.9 4.8 1.2 1.6-.6 2.5-2 2.5-3.9-.1-7-2.6-12.9-7.5-18.1-5-4.7-11-7.3-18-7.4z" />
      <path d="M69 11.4c8.5 8.7 12.5 18.1 12.8 29.1.1 2.5-1.5 4.2-3.9 4.3-2.6.1-4.3-1.4-4.4-4-.1-5.4-1.4-10.5-4-15.2-6-10.7-15.3-16.3-27.5-17-1.4-.1-2.6-.2-3.6-1.3-1.2-1.4-1.3-3-.7-4.6.7-1.6 2-2.4 3.8-2.4 8 .1 15.3 2.4 22 6.8 2.2 1.5 4.3 3.3 5.5 4.3z" />
    </svg>
  </div>
)


export default Banner