import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../../TableOption/TableOption.module.css";
import { useDispatch } from 'react-redux';
import Quantity from '../../../../pages/Site/ShopDetails/Quantity';
import { formatMoney } from '../../../../extensions/formatMoney';
import { deleteCart } from '../../../../redux/SliceReducer/OrderTableSlice';
import { useEffect } from 'react';

function ProductCart({ img, name, idCart, price,quantity }) {
    const dispatch = useDispatch()
    const [quantityCart,setQuantityCart]=React.useState('')
    useEffect((() => {
        setQuantityCart(quantity)
    }),[quantity])
    const handleDelete =()=>{
        dispatch(deleteCart(idCart))
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
                    <Quantity idCart={idCart} quantity={quantityCart} setQuantity={setQuantityCart} />
                </div>
                <div className={styles.deleteIcon} onClick={handleDelete}>
                    <DeleteIcon />
                </div>
            </div>
        </div>
    )
}

export default ProductCart