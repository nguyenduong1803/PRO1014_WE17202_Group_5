import React from 'react'
import { useSelector } from 'react-redux'
import {selectProducts } from '../../../redux/selector'
import styles from "./TableOption.module.css"
import AddIcon from "@mui/icons-material/Add";
import { formatMoney } from '../../../extensions/formatMoney';
import { useDispatch } from 'react-redux';
import { addOrder, deleteCart } from '../../../redux/SliceReducer/OrderTableSlice';
import Search from '../../../assets/svg/Search';
import { Button } from '@mui/material';
function ChooseProduct({ className }) {
    const products = useSelector(selectProducts)
    return (
        <div className={`TableOption__wrapCart ${className}`} >
            <div className={styles.search}>
                <div className={styles.warpInput}>
                    <input
                        className={styles.searchInput}
                        placeholder="Tìm kiếm..."
                    />
                    <Search className={styles.searchIcon} />
                </div>
            </div>
            <div className={styles.wrapCategory}>
                <div className={styles.wrapbutton}><Button variant="outlined" color="success" margin="2"> Đồ uống</Button></div>
                <div className={styles.wrapbutton}> <Button variant="outlined" color="success"> Sashimi</Button></div>
                <div className={styles.wrapbutton}> <Button variant="outlined" color="success"> Tôm</Button></div>
                <div className={styles.wrapbutton}> <Button variant="outlined" color="success"> Cá</Button></div>
                <div className={styles.wrapbutton}> <Button variant="outlined" color="success"> Đồ uống</Button></div>
            </div>
            <div className="content__cart-box row">
                {
                    products && products.map((product, index) => {
                        return (
                            <div className={" col-lg-6"} key={index}>
                                <ProductChoose  name={product.name}  price={product.price} id={product.id} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

function ProductChoose({ img, name, price,id }) {
    const dispatch = useDispatch()
    const handleAddOrder = () => {
        dispatch(addOrder({id,quantity:1}))
    }
    return (
        <div className={styles.wrapchoose}>
            <div className={styles.info_choose}>
                <div className={styles.img_choose}>
                    <img src={img} alt="" />
                </div>
                <div className={styles.name}>
                    <h4 className={styles.nameProducts}>{name}</h4>
                    <div className={styles.price}>{price && formatMoney(price)} đ</div>
                </div>
            </div>
            <div className={styles.detail}>
                <div className={styles.icon} onClick={handleAddOrder}>
                    <AddIcon />
                </div>
            </div>
        </div>
    )
}

export default ChooseProduct