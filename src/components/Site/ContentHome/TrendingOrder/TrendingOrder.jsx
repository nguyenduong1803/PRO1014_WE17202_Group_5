import React from "react";
import styles from "./TrendingOrder.module.css";
import AddIcon from '@mui/icons-material/Add';
import SvgIcon from '../../../../../src/assets/svg/SvgIcon';
function TrendingOrder({ top, img, title, price ,persons}) {
  return (
    <div className={`${styles.trending} col-lg-6`}>
      
       <div className={styles.trendingContent}>
       <h5 className={styles.top}><SvgIcon/>  {top}</h5>
        <img src={img} alt="" />
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.line}></p>
        <p className={styles.persons}>{persons}</p>
        <p className={styles.price}>{price} <div className={styles.icon}><AddIcon/></div></p>
        

       </div>
    </div>
  );
}


export default TrendingOrder;
