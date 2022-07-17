import React from 'react'
import styles from "./Register.module.css"
function BannerAnimation() {
  return (
    <div className={`${styles.banner} col-9`}>
    <div className={`${styles.context}`}>
        <h1>Pure Css Animated Background</h1>
    </div>
    <div className={`${styles.area}`}>
        <ul className={`${styles.circles}`}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div >
</div>
  )
}

export default BannerAnimation