import React from 'react'
import styles from './Banner.module.css';
import banner from '../../../../assets/img/01.png';
function Banner() {
  return (
    <div className={styles.Banner}>
        <img src={banner} alt="" />
    </div>
  )
}

export default Banner