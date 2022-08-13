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
        <h3 className={styles.contents}>Chào mừng bạn đến với hải sản !!!</h3>
        <p className={styles.note}>Tươi tuyệt vời</p>
       <Link to='/dat-ban'>
       <Button variant="contained" size="large" className={styles.button}>
          Đặt bàn ngay
        </Button>
       </Link>
      </div>
    </div>
  )
}

export default Banner