import React from 'react'
import styles from './SaleFood.module.css';
function SaleFood({img,title,content}) {
  return (
    <div className={styles.saleFood}>
            <img className={styles.blur_shadow} src={img} alt="" />
            <img src={img} alt="" />
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content}>{content}</p>
    </div>
  )
}

export default SaleFood