import React from 'react'
import styles from "../ShopDetails/ProductDetails.module.css"
function QuantityCart({ setQuantity, quantity,setCarts,productId }) {
    const handleChange = (event) => {
        const value = event.target.value.replace(/[^0-9]/g, '');
        if (value === "") setQuantity(0);
        else setQuantity(Number(value));
    };
    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            setCarts(prev => {
                const index = prev.findIndex((element) => element.productId === productId)
                prev[index].quantity -=1
                localStorage.setItem('cart', JSON.stringify(prev));
                return prev
            })
        }
    };
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        setCarts(prev => {
            const index = prev.findIndex((element) => element.productId === productId)
            prev[index].quantity +=1
            localStorage.setItem('cart', JSON.stringify(prev));
            return prev
        })
    };
    return (
        <div className={styles.quantity}>
            <button onClick={() => decreaseQuantity()}>-</button>
            <input
                type="text"
                className={styles.productQuantity}
                value={quantity}
                onChange={(e) => handleChange(e)}
                onKeyPress={(event) => { !(/^[0-9]/.test(event.key)) && event.preventDefault(); }}
            />
            <button onClick={() => increaseQuantity()}>+</button>
        </div>
    )
}

export default QuantityCart
