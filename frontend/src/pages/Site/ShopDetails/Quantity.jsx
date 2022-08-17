import React from "react";
import styles from "./ProductDetails.module.css";

function Quantity({  quantity }) {
    const handleChange = (event) => {
        // const value = event.target.value.replace(/[^0-9]/g, "");
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
