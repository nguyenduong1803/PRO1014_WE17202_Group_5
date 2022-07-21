import React from 'react'
import QuantityCart from '../../../pages/Site/Cart/QuantityCart'
import styles from "./TableOption.scss"
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CelendarOption from '../Calendar/CelendarOption';
// import DeleteOutlineIcon from '@mui/icons-material/HighlightOff';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { FormControl, TextField } from '@mui/material';
import { Link } from "react-router-dom";
function OrderItem({ user,idTable }) {
    const [tableName, setTableName] = React.useState(idTable);
    const [order,setOrder]= React.useState({
        name:user.ten,
        phone:user.sdt,
        countGuest:1,
    });
    const handleOrder = ()=>{
        console.log("order")
    }
    return (
        <section className="section" id="order">
            <div className="section-title">My Order&nbsp;😎</div>
            <div className="order-info">
                <div className="address">
                    <div className="address-name">Bàn {tableName}</div>
                    <select onChange={e => setTableName(e.target.value)} className="form-select form__edit-cart" aria-label="Default select example">
                        <option selected>Đổi Bàn</option>
                        <option value="A-2">A-2</option>
                        <option value="A-3">A-3</option>
                        <option value="A-4">A-4</option>
                    </select>
                </div>
                <div className="delivery">
                    <div className="delivery-time">
                        <div className="btn time-btn">
                            <svg t="1586139290823" className="clock" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2356" width="18" height="18">
                                <path
                                    d="M512 42.65984q95.66208 0 182.49728 37.1712t149.66784 100.00384 100.00384 149.66784 37.1712 182.49728-37.1712 182.49728-100.00384 149.66784-149.66784 100.00384-182.49728 37.1712-182.49728-37.1712-149.66784-100.00384-100.00384-149.66784-37.1712-182.49728 37.1712-182.49728 100.00384-149.66784 149.66784-100.00384 182.49728-37.1712zM512 128q-78.00832 0-149.17632 30.49472t-122.49088 81.83808-81.83808 122.49088-30.49472 149.17632 30.49472 149.17632 81.83808 122.49088 122.49088 81.83808 149.17632 30.49472 149.17632-30.49472 122.49088-81.83808 81.83808-122.49088 30.49472-149.17632-30.49472-149.17632-81.83808-122.49088-122.49088-81.83808-149.17632-30.49472zM512 213.34016q17.67424 0 30.16704 12.4928t12.4928 30.16704l0 238.32576 115.67104 115.32288q12.32896 12.32896 12.32896 30.33088t-12.32896 30.33088-30.33088 12.32896-30.33088-12.32896l-128-128q-12.32896-12.32896-12.32896-30.33088l0-256q0-17.67424 12.4928-30.16704t30.16704-12.4928z"
                                    p-id="2357"></path>
                            </svg>
                        </div>
                        <span className="delivery-choose-time">30s</span>

                    </div>
                    <span className="time"><CelendarOption /></span>
                </div>
            </div>
            <FormControl sx={{ margin: "12px 0", width: '100%' }} >
                <InputField name="Chủ tiệc" values={order.name} setOrder={setOrder} />
            </FormControl>
            <FormControl sx={{ margin: "12px 0", width: '100%' }} >
                <InputField name="Số điện thoại" values={order.phone} setOrder={setOrder} />
            </FormControl>
            <FormControl sx={{ margin: "12px 0", width: '100%' }} >
                <InputField name="Số người" setOrder={setOrder} values={order.countGuest} />
            </FormControl>

            {/* <ul className="food-list">
                <CartItem
                    id="1"
                />
              <CartItem
                    id="1"
                />
                <CartItem
                    id="1"
                />
               
                <CartItem
                    id="1"
                />
                <CartItem
                    id="1"
                />
            </ul> */}
            {/* <div className="total-price">
                <div className="total">Tổng tiền:</div>
                <div className="price">$25.97</div>
            </div> */}
            <div className="buy-action">
                <div className="person-number-input">
                    {/* <Link to="/order" className="btn btn-warning checkout-btn">
                        Thêm món ăn<LocalDiningIcon />
                    </Link> */}
                </div>
                <button onClick={handleOrder} className="btn btn-warning checkout-btn">
                    Tiến hành đặt<svg width="18" height="18" className="arrow" viewBox="0 0 24 24">
                        <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                    </svg>
                </button>
            </div>
        </section>
    )
}

const CartItem = ({ id }) => {
    const [quantity, setQuantity] = React.useState(1)
    return (
        <li className="food-list__item">
            <img className="food-image" src="https://i.loli.net/2020/04/06/7oZgORNCnGE5qhU.png" />

            <div className="food-name">Beach BBQBurger</div>
            <div className="food-buy-amount">
                <QuantityCart
                    productId={id}
                    setQuantity={setQuantity}
                    quantity={quantity}
                /></div>
            <div className="food-price">680.000 đ</div>
            <div className="delete__cart-icon"><DeleteOutlineIcon fontSize='small' /></div>
        </li>
    )
}
function InputField({ name, setOrder, values }) {
    const handleChangeOrder = (e)=>{
        setOrder(prev=>{ 
            if(name==="Chủ tiệc"){
                return {...prev,name:e.target.value}
            }else if(name==="Số điện thoại"){
                return {...prev,phone:e.target.value}
            }else{
                return {...prev,countGuest:e.target.value}
            }
        })
    }
    return (
        <TextField
            id="outlined-basic"
            label={name}
            variant="outlined"
            onChange={(e) =>handleChangeOrder(e)}
            value={values}
        />
    );
}
export function ModalLogin() {
    return (
        <div className={styles.WrapLogin}>
            <h2 className="modalLogin_title">Bạn phải đăng nhập để thực hiện chức năng này</h2>
            <h2 className="modalLogin_title">Chuyển đến trang Đăng nhập</h2>
            <div className="d-flex justify-content-between align-items-center">
                <Link to="/dang-nhap" type="button" className="btn btn-outline-success">Đăng nhập</Link>
                <label type="button" for="modal-toggle" className="btn btn-outline-success">Tiếp tục xem</label>
            </div>
        </div>
    )
}
export default OrderItem