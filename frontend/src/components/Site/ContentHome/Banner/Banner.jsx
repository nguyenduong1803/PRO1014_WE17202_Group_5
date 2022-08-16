import React from 'react'
import styles from './Banner.module.css';
import SvgIcon from '../../../../../src/assets/svg/SvgIcon';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
// import banner from '../../../../assets/img/01.png';
function Banner() {
  return (
    <div className={styles.Banner}>
      <div className={styles.img}>
        {/* <img src={banner} alt="" /> */}
      </div>
      <div className={styles.content}>
        <p className={styles.deal}><SvgIcon className={styles.SvgIcon}/>Ưu đãi cuối tuần</p>
        <h3 className={styles.contents}>Chào mừng bạn đến với nhà hàng !!!</h3>
        <p className={styles.note}>Tươi ngon tuyệt vời</p>
       <Link to='/dat-ban'>
        <button className={`${styles.custom_btn} ${styles.btn_11}`}> Đặt bàn ngay<div className={styles.dot}></div></button>
       </Link>
      </div>
    </div>
  )
}

export default Banner