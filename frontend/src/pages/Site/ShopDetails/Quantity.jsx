import React, { useEffect, useState } from "react";
import styles from "./ProductDetails.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { addQuantityOrder } from "../../../redux/SliceReducer/OrderTableSlice";
import axios from "axios";
import { api } from "../../../utils/api";
import { getToken } from "../../../utils/Common";
function Quantity({ setQuantity, quantity, idCart }) {
    const handleChange = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, "");
        console.log(value);
    };
    // const decreaseQuantity = () => {
    //     if (quantity < 1) return;
    //     setQuantity(quantity--);
    //     updateCart()
    // };
    // const increaseQuantity = () => {
    //     setQuantity(quantity++);
    //     updateCart()
    // };

    // async function updateCart() {
    //     const params = {
    //         id:idCart,
    //         amount: quantity,
    //     };
    //     const res = await axios.post(api + `cart/updateOrder`, params, {
    //         headers: { Authorization: `Bearer ${getToken()}` },
    //     });
    //     console.log(res)
    // }

    return (
        <div className={styles.quantity}>
            {/* <button onClick={() => decreaseQuantity()}>
                <RemoveIcon className={styles.RemoveIcon} />
            </button> */}
            <input
                type="text"
                className={styles.productQuantity}
                value={quantity}
                onChange={(e) => handleChange(e)}
                onKeyPress={(event) => {
                    !/^[0-9]/.test(event.key) && event.preventDefault();
                }}
            />
            {/* <button onClick={() => increaseQuantity()}>
                <AddIcon className={styles.RemoveIcon} />
            </button> */}
        </div>
    );
}

export default Quantity;
