import React from 'react'
import styles from "./ProductDetails.module.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function Quantity({ setQuantity, quantity }) {
    const handleChange = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, '');
        if (value === "") setQuantity(0);
        else setQuantity(Number(value));
    };
    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    return (
        <div className={styles.quantity}>
            <button onClick={() => decreaseQuantity()}><RemoveIcon className={styles.RemoveIcon}/></button>
            <input
                type="text"
                className={styles.productQuantity}
                value={quantity}
                onChange={(e) => handleChange(e)}
                onKeyPress={(event) => { !(/^[0-9]/.test(event.key)) && event.preventDefault(); }}
            />
            <button onClick={() => increaseQuantity()}><AddIcon className={styles.RemoveIcon}/></button>
        </div>
    )
}

export default Quantity
