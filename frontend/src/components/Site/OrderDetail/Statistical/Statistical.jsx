import React from 'react'
import styles from './Statistical.module.css';
function Statistical() {
  return (
    <div>
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
    </div>
  )
}

export default Statistical