import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../../../redux/selector'
import ProductCartTable from './ProductCartTable'
import styles from "./TableOption.module.css"
function InfomationCart() {
  const carts = useSelector(selectCart)
    return (
        <div className="TableOption__wrapCart" >
            <h3 className="mb-3">Thông tin giỏ hàng</h3>
            <div className="content__cart-box">
                {
                    carts && carts.map((cart, index) => {
                        return (
                        <ProductCartTable key={index} name={cart.name} content="content" img="https://www.eatthis.com/wp-content/uploads/sites/4/2022/05/steak-n-shake-7x7-steakburger.jpg?quality=82&strip=1" price={cart.price} quantity={ cart.amount} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default InfomationCart