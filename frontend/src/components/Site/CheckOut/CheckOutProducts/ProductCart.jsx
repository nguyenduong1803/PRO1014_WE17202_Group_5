import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import Quantity from "../../../../pages/Site/ShopDetails/Quantity";
import styles from "./CheckOutProducts.module.css";
import { formatMoney } from '../../../../extensions/formatMoney';
function ProductCart({img,name,content,price}) {
    return (
            <div className={styles.contentMain}>
                <div className={styles.info}>
                    <div className={styles.img}>
                        <img src={img} alt="" />
                    </div>
                    <div className={styles.name}>
                        <h4 className={styles.nameProducts}>{name}</h4>
                        <p className={styles.contentProducts}>{content}</p>
                    </div>
                </div>
                <div className={styles.detail}>
                    <div className={styles.quantity}>
                        <Quantity />
                    </div>
                    <div className={styles.price}>{formatMoney(price)} đ</div>
                    {/* <div className={styles.icon}>
                        <DeleteIcon />
                    </div> */}
                </div>
            </div>
    )
}

export default ProductCart