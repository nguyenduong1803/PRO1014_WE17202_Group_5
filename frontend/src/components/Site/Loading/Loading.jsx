import React from 'react'
import styles from './Loading.module.css'

const Loadings = () => {
  return (
    <div className={`${styles.wrap} d-flex justify-content-center align-items-center`}>
      <div className="text-center"><div className={styles.loader1}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div></div>
    </div>

  )
}

export default Loadings