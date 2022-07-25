import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import Quantity from "../../../pages/Site/ShopDetails/Quantity";
import styles from "./TableOption.module.css";
import { formatMoney } from '../../../extensions/formatMoney';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../../redux/SliceReducer/OrderTableSlice';
function ProductCartTable({ img, name, idCart, price,quantity }) {
    const dispatch = useDispatch()
    const [quantityCart,setQuantityCart]=React.useState(quantity)
    const handleDelete =()=>{
        dispatch(deleteCart(12))
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
                    <Quantity quantity={quantityCart} setQuantity={setQuantityCart} />
                </div>
                <div className={styles.icon} onClick={handleDelete}>
                    <DeleteIcon />
                </div>
            </div>
        </div>
    )
}

export default ProductCartTable