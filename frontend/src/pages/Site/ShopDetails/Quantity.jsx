import React from 'react'
import styles from "./ProductDetails.module.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { addQuantityOrder } from '../../../redux/SliceReducer/OrderTableSlice';
function Quantity({ setQuantity, quantity, id }) {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, '');
        if (value === "") dispatch(addQuantityOrder({ id, quantity: 0 }));
        else dispatch(addQuantityOrder({ id, quantity: Number(value) }));

    };
    

    return (
        <div className={styles.quantity}>
            <input
                type="number"
                className={styles.productQuantity}
                value={quantity}
                onChange={(e) => handleChange(e)}
                
                onKeyPress={(event) => { !(/^[0-9]/.test(event.key)) && event.preventDefault(); }}
            />
        </div>
    )
}

export default Quantity
