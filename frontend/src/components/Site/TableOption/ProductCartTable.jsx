import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import Quantity from "../../../pages/Site/ShopDetails/Quantity";
import styles from "./TableOption.module.css";
import { formatMoney } from '../../../extensions/formatMoney';
import { useDispatch } from 'react-redux';

function ProductCartTable({ img, name, price,quantity,id }) {
   
    const handleDelete =()=>{
        // dispatch(deleteCart(idCart))
    }

    return (
        <div className={styles.contentMain}>
            <div className={styles.info}>
                <div className={styles.img}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.name}>
                    <h4 className={styles.nameProducts}>{name}</h4>
                    <div className={styles.price}>{price&&formatMoney(price)} đ</div>

                </div>
            </div>
            <div className={styles.detail}>
                <div className={styles.quantity}>
                    <Quantity quantity={quantity}  id={id}/>
                </div>
                <div className={styles.deleteIcon} onClick={handleDelete}>
                    <DeleteIcon />
                </div>
            </div>
        </div>
    )
}

export default ProductCartTable