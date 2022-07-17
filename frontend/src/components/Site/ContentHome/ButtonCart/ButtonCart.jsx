import React from 'react'
import styles from "./ButtonCart.module.css"
import OrderIcon from "../../../../assets/svg/OrderIcon"
import BarArrow from '../../../../assets/svg/BarArrow'
function ButtonCart() {

  const [toggle, setToggle] = React.useState(false)
  const handleClick = () => {
    setToggle(!toggle)
  }
  return (
    <div className={`${styles.control_center} ${toggle ? styles.open : ""}`}>
      <div className={`${styles.option_btn} ${toggle ? styles.open : ""}`} onClick={handleClick}>
        {toggle ? <BarArrow width="25px" /> :
          <><OrderIcon width="42px" height="42px" fill="#fff" />
           <span className={styles.num_count}>13</span></>}


      </div>
      <div className={`${styles.left_sidebar}`}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <button className="btn btn-primary">Đặt Món</button>
      </div>
    </div>
  )
}

export default ButtonCart