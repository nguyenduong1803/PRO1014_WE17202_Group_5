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
        <p className={styles.deal}><SvgIcon className={styles.SvgIcon}/> Deal of the weekend</p>
        <h3 className={styles.contents}>Welcome to seafood !!! </h3>
        <p className={styles.note}>Wonderfully fresh</p>
       <Link to='/menu'>
       <Button variant="contained" className={styles.button}>
          Check Menu
        </Button>
       </Link>
      </div>
    </div>
  )
}

export default Banner