import React from 'react'
import styles from './MenuContentDetail.module.css';
function MenuContentDetail({img,title,content}) {
  return (
    <div className='col-lg-4'>
        <div className={styles.MenuContentDetail}>
        <div className={styles.MenuContent}>
            <img src={img} alt="" />
            <div>
            <div className={styles.content}>
            <h4>{title}</h4>
            <p>{content}</p>
            </div>
            <div className={styles.list}>
                <div>Quantity</div>
                <div>Orders</div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MenuContentDetail