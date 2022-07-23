import React from 'react'
import styles from './Statistical.module.css';
function Statistical() {
  return (
    <div className={styles.containerss}>
            <h2>Customer Favourite</h2>

        <div className={styles.container}>
        
        <div className={styles.progress}>
            <label className={styles.title } data-from="0" data-to="70" data-speed="1500">70</label>
            <div className={styles.overlay}></div>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
        </div>

        <div className={styles.progresss}>
        <label className={styles.title } data-from="0" data-to="80" data-speed="1500">80</label>
            <div className={styles.overlay}></div>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
        </div>
    </div>
    <div div style={{display: 'flex',gridGap:'20px',textAlign:'center',lineHeight:'1.6rem'}}>
           <div>Food 45 menus</div>
            <div>Drink 21 menus</div>
           </div>
    </div>
  )
}

export default Statistical