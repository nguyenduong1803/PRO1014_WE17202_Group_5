import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../../../redux/selector'
import styles from "./TableOption.module.css"
import AddIcon from "@mui/icons-material/Add";
import Quantity from "../../../pages/Site/ShopDetails/Quantity";
import { formatMoney } from '../../../extensions/formatMoney';
import { useDispatch } from 'react-redux';
import { deleteCart } from '../../../redux/SliceReducer/OrderTableSlice';
import Search from '../../../assets/svg/Search';
import { Button } from '@mui/material';
function ChooseProduct({ className }) {
    const carts = useSelector(selectCart)
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
                <div className={styles.wrapbutton}>        <Button variant="outlined" color="success"> Sashimi</Button></div>
                <div className={styles.wrapbutton}>   <Button variant="outlined" color="success"> Tôm</Button></div>
                <div className={styles.wrapbutton}>   <Button variant="outlined" color="success"> Cá</Button></div>
                <div className={styles.wrapbutton}> <Button variant="outlined" color="success"> Đồ uống</Button></div>
            </div>
            <div className="content__cart-box row">
                {
                    carts && carts.map((cart, index) => {
                        return (
                            <div className={" col-lg-6"}>
                                <ProductChoose key={index} name={cart.name} content="content" img={cart.path} price={cart.price} quantity={cart.amount} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

function ProductChoose({ img, name, price, quantity }) {
    const dispatch = useDispatch()
    const [quantityCart, setQuantityCart] = React.useState(quantity)
    const handleDelete = () => {
        dispatch(deleteCart(5))
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
                <div className={styles.icon} onClick={handleDelete}>
                    <AddIcon />
                </div>
            </div>
        </div>
    )
}

export default ChooseProduct